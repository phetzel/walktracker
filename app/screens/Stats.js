import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../util/colors';
import Screen from '../components/Screen';
import SwitchTimes from '../components/SwitchTimes';

const Stats = (props) => {
    return (
        <Screen>
            <View style={styles.container}>

            <SwitchTimes />
            </View>
        </Screen>
    );
};
const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.black,
      flex: 1,
      height: '100vh',
      width: '100%'
  },
});

export default Stats;