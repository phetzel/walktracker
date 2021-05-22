import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import colors from '../util/colors';
import { distDisplay, dateDisplay } from '../util/history';
import textUtil from '../util/text';
import { formatTime } from '../util/time';

const HistoryListItem = ({ act, dist, date, id, time, setDeleted }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Show', { id: id, setDeleted: setDeleted })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <MaterialCommunityIcons name={act} size={40} color="black" />
            <View style={styles.details}>
                <Text style={textUtil}>Distance:  {distDisplay(dist)}</Text>
                <Text style={textUtil}>Date:  {dateDisplay(date)}</Text>
                <Text style={textUtil}>Time:  {formatTime(time)}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: colors.white,
      borderRadius: 20,
      flexDirection: 'row',
      height: 100,
      justifyContent: 'space-around',
      marginBottom: 5,
      width: '90%'
  },
  details: {
      marginRight: 30
  }
});

export default HistoryListItem;