import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { distDisplay, dateDisplay } from '../util/history';
import { formatTime } from '../util/time';

const HistoryShowDetails = ({ distance, date, time }) => {
    return (
        <View style={styles.container}>
            <Text>Date: {dateDisplay(date)}</Text>
            <Text>Distance: {distDisplay(distance)}</Text>
            <Text>Time: {formatTime(time)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {},
});

export default HistoryShowDetails;