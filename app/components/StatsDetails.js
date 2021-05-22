import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import colors from '../util/colors';
import text from '../util/text';
import { formatTime } from '../util/time';
import { 
    aveDistance, 
    totalDistance, 
    aveTime, 
    totalTime,
    avePace 
} from '../util/stats';

const StatsDetails = ({ time, walks }) => {
    console.log(walks);
    return (
        <View style={styles.container}>
            <Text style={text}>Total Trips: {walks.length}</Text>
            <Text style={text}>Total Distance: {totalDistance(walks)} km</Text>
            <Text style={text}>Average Distance: {aveDistance(walks)} km</Text>
            <Text style={text}>Total Time: {formatTime(totalTime(walks))}</Text>
            <Text style={text}>Average Time: {formatTime(aveTime(walks))}</Text>
            <Text style={text}>Average Pace: {avePace(walks)} km/sec</Text>
        </View>
    );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 5,
    marginTop: 15,
    padding: 15,
    width: '80%'
  },
});

export default StatsDetails;