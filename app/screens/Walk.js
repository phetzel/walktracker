import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import haversine from 'haversine';
import MapView, { Marker, Polyline } from 'react-native-maps';

import distanceBetween from '../util/distance';
import WalkDetails from '../components/WalkDetails';

const Walk = () => {
    const [location, setLocation] = useState();
    const [coords, setCoords] = useState([]);
    const [distance, setDistance] = useState(0);
    const [last, setLast] = useState();

    const watchPosition = async () => {
        const { granted } = await Location.requestPermissionsAsync();
        if (!granted) return;

        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation.coords);
        const firstLast = {
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude
        };
        setLast(firstLast);
        // console.log(last);

        const newLoc =  await Location.watchPositionAsync({
            accuracy: Location.Accuracy.High,
            timeInterval: 1000,
            distanceInterval: 10
        }, position => {
            const { latitude, longitude } = position.coords;
            const newCoord = {
                latitude,
                longitude
            }

            if (last) {
                // const newDist = calcDist(newCoord);
                const newDist = distanceBetween(
                    last.latitude,
                    last.longitude,
                    newCoord.latitude,
                    newCoord.longitude
                );
                console.log(newDist);
                setDistance(distance + newDist);
                setLast(newCoord);
                console.log(distance);
            }
            
            // const newCoords = [...coords];
            // newCoords.concat([newCoord]);
            // setCoords(newCoords);
            
            
            setLocation(position.coords);
        }, 
        err => console.log(err));
    }

    const calcDist = latLng => {
        return haversine(last, latLng) || 0;
    }


    useEffect(() => {
        // navigator.geolocation.watchPosition(position => {
        //     console.log(position);
        // }, err => console.log(err)
        // );
        watchPosition();
    }, []);

    return (
        <View style={styles.container}>
            { location &&
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05
                    }}
                    provider={MapView.PROVIDER_GOOGLE}>

                    <Polyline coordinates={coords} strokeWidth={5} />

                    <Marker
                        coordinate={{ 
                            latitude: location.latitude, 
                            longitude: location.longitude 
                        }}
                    >

                    </Marker>
                    
                
                </MapView>
            }
            <WalkDetails distance={distance} />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Walk;