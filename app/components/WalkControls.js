import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../util/colors';
import WalkContext from '../context/walk_context';

const WalkControls = (props) => {
    const { 
        isPaused,
        handlePause,
        handleResume,
        handleReset,
        setOnWalk
    } = useContext(WalkContext);

    const handleStop = () => {
        handleReset();
        setOnWalk(false);
    }

    const playPause = isPaused ? (
        <MaterialCommunityIcons 
            name="pause" 
            size={35} 
            color={colors.black} 
            onPress={handlePause}/>
    ) : (
        <MaterialCommunityIcons 
            name="play" 
            size={35} 
            color={colors.black} 
            onPress={handleResume}/>
    );

    return (
        <View style={styles.container}>
            {playPause}
            <MaterialCommunityIcons 
                name="stop" 
                size={35} 
                color={colors.red} 
                onPress={handleStop}/>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row'
  },
});

export default WalkControls;