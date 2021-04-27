import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import colors from '../util/colors';
import textUtil from '../util/text';

const HistoryListItem = ({ id, dist, date }) => {
    console.log(id);
    return (
        <View style={styles.container}>
            <Text style={textUtil}>{id}</Text>
            <Text style={textUtil}>Distance:  {dist}</Text>
            <Text style={textUtil}>Date:  {date}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
      alignSelf: 'center',
      backgroundColor: colors.white,
      height: 100,
      marginBottom: 5,
      width: '90%'
  },
});

export default HistoryListItem;