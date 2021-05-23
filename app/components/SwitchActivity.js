import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import colors from '../util/colors';
import Seporator from './SwitchSeperator';

const SwitchActivity = ({ func }) => {
    const [tab, setTab] = useState();

    const isActive = str => {
        return str === tab ? styles.active : styles.unactive;
    }

    const handleClick = type => {
        setTab(type);
        func(type);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={() => handleClick()}
                style={styles.button}>
                <Text style={isActive()}>All</Text>     
            </TouchableOpacity>

            <Seporator />

            <TouchableOpacity 
                onPress={() => handleClick('walk')}
                style={styles.button}>
                <Text style={isActive('walk')}>Walk</Text>     
            </TouchableOpacity>

            <Seporator />

            <TouchableOpacity 
                onPress={() => handleClick('bike')}
                style={styles.button}>
                <Text style={isActive('bike')}>Bike</Text>    
            </TouchableOpacity>
            <Seporator />

            <TouchableOpacity 
                onPress={() => handleClick('roller-skate')}
                style={styles.button}>
                <Text style={isActive('roller-skate')}>Skate</Text>    
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
    marginBottom: 15,
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

export default SwitchActivity;