import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../util/colors';
import { distDisplay, dateDisplay } from '../util/history';
import textUtil from '../util/text';
import { formatTime } from '../util/time';

const HistoryListItem = ({ dist, date, id, time }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Show', { id: id })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Text style={textUtil}>Distance:  {distDisplay(dist)}</Text>
            <Text style={textUtil}>Date:  {dateDisplay(date)}</Text>
            <Text style={textUtil}>Time:  {formatTime(time)}</Text>
        </TouchableOpacity>
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