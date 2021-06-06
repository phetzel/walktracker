import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { AnimatedRegion, Marker, Polyline } from 'react-native-maps';
import haversine from "haversine";




class WalkTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // latitude: LATITUDE,
            // longitude: LONGITUDE,
            routeCoordintates: [],
            distanceTravelled: 0,
            prevLatLng: {},
            coordinate: new AnimatedRegion({
                latitude:  0,
                longitude: 0
            })
        }
    }

    componentDidMount() {
        this.watchID = navigator.geolocation.watchPosition(
            position => {
                const { 
                    coordinate, 
                    routeCoordinates, 
                    distanceTravelled} = this.state;

                const { latitude, longitude } = position.coords;

                const newCoordinate = { latitude, longitude };

                coordinate.timing(newCoordinate).start();

                console.log(newCoordinate);
            }
        )
    }

    render() {
        return (
            <View style={styles.container}>

            </View>
    );
};

const styles = StyleSheet.create({
  container: {},
});

export default WalkTest;