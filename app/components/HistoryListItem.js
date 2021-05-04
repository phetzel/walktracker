import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import colors from '../util/colors';
import { distDisplay, dateDisplay } from '../util/history';
import textUtil from '../util/text';

const HistoryListItem = ({ id, dist, date }) => {
    return (
        <View style={styles.container}>
            <Text style={textUtil}>Distance:  {distDisplay(dist)}</Text>
            <Text style={textUtil}>Date:  {dateDisplay(date)}</Text>
            {/* <Text style={textUtil}>Pace:  {dateDisplay(date)}</Text> */}
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