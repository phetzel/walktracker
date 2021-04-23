import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import textUtil from '../util/text';
import WalkContext from '../context/walk_context';
import WalkStartButton from './WalkStartButton';

const WalkStart = (props) => {
    const { setOnWalk } = useContext(WalkContext);

    return (
        <View style={styles.container}>
            <Text style={textUtil}>Click to Start</Text>
            <WalkStartButton onPress={() => setOnWalk(true)}/>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      backgroundColor: "rgba(255,255,255,0.7)",
      bottom: 25,
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      position: 'absolute',
      width: '95%'
  }
});

export default WalkStart;