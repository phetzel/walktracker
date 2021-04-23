import React, { useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';

import textUtil from '../util/text';
import WalkContext from '../context/walk_context';
import WalkControls from './WalkControls';
import WalkTimer from './WalkTimer';

const WalkDetails = ({ distance }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={textUtil}>Distance: {distance.toFixed(2)}km</Text>
                <WalkTimer />
            </View>
            <WalkControls />
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
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      position: 'absolute',
      width: '95%'
  },
  text: {
      fontSize: 25
  }
});

export default WalkDetails;