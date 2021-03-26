import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, Polyline } from 'react-native-maps';

import distanceBetween from '../util/distance';
import WalkContext from '../context/walk_context';
import WalkDetails from '../components/WalkDetails';
import WalkStart from '../components/WalkStart';

const Walk = () => {
    const [location, setLocation] = useState();
    const [coords, setCoords] = useState([]);
    const [distance, setDistance] = useState(0);
    const [last, setLast] = useState();
    const { onWalk } = useContext(WalkContext);


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
                const newDist = distanceBetween(
                    last.latitude,
                    last.longitude,
                    newCoord.latitude,
                    newCoord.longitude
                );
                setDistance(distance + newDist);
                setLast(newCoord);
            }
            
            setCoords([...coords, newCoord]);
            setLocation(position.coords);
        }, 
        err => console.log(err));
    }

    useEffect(() => {
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
            { onWalk ?
                <WalkDetails distance={distance} /> :
                <WalkStart />
            }
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