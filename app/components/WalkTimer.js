import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import textUtil from '../util/text';
import useTimer from '../hooks/useTimer';
import WalkContext from '../context/walk_context';

const WalkTimer = (props) => {
    const { paused, setPause } = useState(false);
    const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0);


    useEffect(() => {
        handleStart();
    }, []);

    const playPause = isPaused ? (
        <MaterialCommunityIcons 
            name="pause" 
            size={24} 
            color="black" 
            onPress={handlePause}/>
    ) : (
        <MaterialCommunityIcons 
            name="play" 
            size={24} 
            color="black" 
            onPress={handleResume}/>
    );

    return (
        <View style={styles.container}>
            <Text style={textUtil}>Time: {timer}</Text>
            {playPause}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});

export default WalkTimer;