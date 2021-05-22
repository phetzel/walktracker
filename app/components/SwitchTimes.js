import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import colors from '../util/colors';
import Seporator from './SwitchSeperator';


const SwitchTimes = ({ func }) => {
    const [tab, setTab] = useState('all');

    const isActive = num => {
        return num === tab ? styles.active : styles.unactive;
    }

    const handleClick = type => {
        setTab(type);
        func(type);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={() => handleClick('all')}
                style={styles.button}>
                <Text style={isActive('all')}>All Time</Text>     
            </TouchableOpacity>

            <Seporator />

            <TouchableOpacity 
                onPress={() => handleClick('month')}
                style={styles.button}>
                <Text style={isActive('month')}>Last Month</Text>     
            </TouchableOpacity>

            <Seporator />

            <TouchableOpacity 
                onPress={() => handleClick('week')}
                style={styles.button}>
                <Text style={isActive('week')}>Last Week</Text>    
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
      alignSelf: 'center',
      backgroundColor: colors.white,
      borderRadius: 5,
      justifyContent: 'space-around',
      flexDirection: 'row',
      width: '80%'
  }, 
  button: {
    alignItems: 'center',
    flex: 1
  },
  active: {
    color: colors.blue,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: '700'
  },
  unactive: {
    color: colors.black,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  }
});

export default SwitchTimes;