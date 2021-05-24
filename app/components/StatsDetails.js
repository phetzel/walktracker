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
    avePace,
    timeDisplay,
    actDisplay
} from '../util/stats';

const StatsDetails = ({ activity, time, walks }) => {
    return (
        <View style={styles.container}>
            <Text style={[text, styles.header]}>{actDisplay(activity)} {timeDisplay(time)}</Text>
            <Text style={text}>Total Trips: {walks.length}</Text>
            <Text style={text}>Total Distance: {totalDistance(walks)} km</Text>
            { walks.length > 0 &&
            <View>
                <Text style={text}>Average Distance: {aveDistance(walks)} km</Text>
                <Text style={text}>Total Time: {formatTime(totalTime(walks))}</Text>
                <Text style={text}>Average Time: {formatTime(aveTime(walks))}</Text>
                <Text style={text}>Average Pace: {avePace(walks)} km/sec</Text>
            </View>
            }
        </View>
    );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 15,
    width: '80%'
  },
  header: {
    fontSize: 25,
    fontWeight: '700'
  }
});

export default StatsDetails;