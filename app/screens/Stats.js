import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import colors from '../util/colors';
import Screen from '../components/Screen';
import SwitchTimes from '../components/SwitchTimes';
import UserContext from '../context/user_context';
import { fetchWalks } from '../api/walk_api';

const Stats = (props) => {
    const [time, setTime] = useState('all');
    const { userId } = useContext(UserContext);

    useEffect(() => {
        const obj = { user_id: userId, date: time };
        fetchWalks(obj).then(res => {
            console.log(res.data.length);
        })
    }, [time])

    return (
        <Screen>
            <View style={styles.container}>
                <Text style={styles.header}>STATS</Text>
                <SwitchTimes func={setTime} />
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.black,
      flex: 1,
      width: '100%'
  },
    header: {
      alignSelf: 'center',
      color: colors.white,
      fontSize: 33,
      fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
      marginBottom: 30,
      marginTop: 30,
  }
});

export default Stats;