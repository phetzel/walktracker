import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const HistoryShowMap = ({ coords }) => {
    return (
        <MapView 
            style={styles.map}
            region={{
                latitude: coords[0].lat,
                longitude: coords[0].lng,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05
            }}
            provider={MapView.PROVIDER_GOOGLE}>
            <Polyline coordinates={coords} strokeWidth={5} />
        </MapView>
    );
};
const styles = StyleSheet.create({
  map: {
    height: 300,
    width: '100%'
  },
});

export default HistoryShowMap;