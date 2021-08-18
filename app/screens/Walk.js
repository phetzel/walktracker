import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import MapView, { Marker, Polyline, PROVIDER_DEFAULT } from "react-native-maps";

import distanceBetween from "../util/distance";
import WalkContext from "../context/walk_context";
import WalkDetails from "../components/WalkDetails";
import WalkStart from "../components/WalkStart";

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const LOCATION_TASK_NAME = "background-location-task";

const LocationService = () => {
  let subscribers = [];
  let location = {
    latitude: 0,
    longitude: 0,
  };

  return {
    subscribe: (sub) => subscribers.push(sub),
    setLocation: (coords) => {
      (location = coords), subscribers.forEach((sub) => sub(location));
    },
    unsubscribe: () => {
      subscribers = subscribers.filter((_sub) => _sub !== _sub);
    },
  };
};

const locationService = LocationService();

const Walk = () => {
  const [location, setLocation] = useState();
  const [last, setLast] = useState();
  const { coords, setCoords, onWalk, distance, setDistance, isPaused } =
    useContext(WalkContext);

  const onLocationUpdate = (location) => {
    const { latitude, longitude } = location;
    const newCoord = {
      latitude,
      longitude,
    };

    const newDist = distanceBetween(
      last.latitude,
      last.longitude,
      newCoord.latitude,
      newCoord.longitude
    );
    setDistance(distance + newDist);
    setLast(newCoord);

    const newCoords = [...coords, newCoord];
    newCoords.push(newCoord);
    setCoords(newCoords);

    setLocation(location);
    console.log(location);
  };

  const stopLocationUpdate = () => {
    locationService.unsubscribe();
  };

  const getInitLocation = async () => {
    const { granted } = await Location.requestPermissionsAsync();
    if (!granted) return;

    const currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation.coords);

    const firstLast = {
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
    };

    setLast(firstLast);
    setCoords([firstLast]);
  };

  const watchPosition = async () => {
    locationService.subscribe(onLocationUpdate);
    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.Highest,
      distanceInterval: 1,
      timeInterval: 5000,
    });
  };

  useEffect(() => {
    if (!onWalk || !isPaused) stopLocationUpdate();
    if (!onWalk) getInitLocation();
    if (onWalk && isPaused) watchPosition();
  }, [onWalk, isPaused]);

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          apiKey={GOOGLE_MAPS_API_KEY}
          style={styles.map}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          provider={MapView.PROVIDER_GOOGLE}
          followsUserLocation={true}
        >
          <Polyline coordinates={coords} strokeWidth={5} />

          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          ></Marker>
        </MapView>
      )}
      {onWalk ? <WalkDetails distance={distance} /> : <WalkStart />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  map: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    console.log(error);
    return;
  }
  if (data) {
    const { locations } = data;
    const { latitude, longitude } = locations[0].coords;
    locationService.setLocation({
      latitude,
      longitude,
    });
  }
});

export default Walk;
