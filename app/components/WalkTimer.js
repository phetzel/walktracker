import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import textUtil from '../util/text';
import { formatTime } from '../util/time';
import WalkContext from '../context/walk_context';

const WalkTimer = (props) => {
    const { 
        timer,
        handleStart,
    } = useContext(WalkContext);

    useEffect(() => {
        handleStart();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={textUtil}>Time: {formatTime(timer)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});

export default WalkTimer;