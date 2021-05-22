import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../util/colors';

const SwitchSeperator = (props) => {
    return <View style={styles.seperator}></View>;
};

const styles = StyleSheet.create({
  seperator: {
    backgroundColor: colors.black,
    height: '100%',
    width: 1
  },
});

export default SwitchSeperator;