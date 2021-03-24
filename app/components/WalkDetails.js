import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const WalkDetails = ({ distance }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Distance: {distance.toFixed(2)}km</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: "rgba(255,255,255,0.7)",
      bottom: 25,
      borderRadius: 20,
      paddingVertical: 10,
      position: 'absolute',
      width: '95%'
  },
  text: {
      fontSize: 25
  }
});

export default WalkDetails;