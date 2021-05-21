import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const HistoryShowMap = ({ coords }) => {
    if (!coords || coords.length < 1) return null;
    
    return (
      <View>
        <MapView 
            style={styles.map}
            region={{
                latitude: coords[0].latitude,
                longitude: coords[0].longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05
            }}
            provider={MapView.PROVIDER_GOOGLE}>
            <Polyline coordinates={coords} strokeWidth={5} />
        </MapView>
      </View>
    );
};
const styles = StyleSheet.create({
  map: {
    height: 300,
    width: '100%'
  },
});

export default HistoryShowMap;