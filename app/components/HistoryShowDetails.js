import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { distDisplay, dateDisplay } from '../util/history';
import { formatTime } from '../util/time';
import text from '../util/text';

const HistoryShowDetails = ({ distance, date, time }) => {
    return (
        <View style={styles.container}>
            <Text style={text}>Date: {dateDisplay(date)}</Text>
            <Text style={text}>Distance: {distDisplay(distance)}</Text>
            <Text style={text}>Time: {formatTime(time)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      marginTop: 20
  },
});

export default HistoryShowDetails;