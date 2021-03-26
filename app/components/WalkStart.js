import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const WalkStart = (props) => {
    return (
        <View style={styles.container}>
            <Text>Click to Start</Text>

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

export default WalkStart;