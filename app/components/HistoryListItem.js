import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import colors from '../util/colors';
import { distDisplay, dateDisplay } from '../util/history';
import textUtil from '../util/text';
import { formatTime } from '../util/time';

const HistoryListItem = ({ id, dist, date, time }) => {
    return (
        <View style={styles.container}>
            <Text style={textUtil}>Distance:  {distDisplay(dist)}</Text>
            <Text style={textUtil}>Date:  {dateDisplay(date)}</Text>
            <Text style={textUtil}>Time:  {formatTime(time)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: colors.white,
      borderRadius: 20,
      height: 100,
      justifyContent: 'space-around',
      marginBottom: 5,
      width: '90%'
  },
});

export default HistoryListItem;