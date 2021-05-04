import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import colors from '../util/colors';

const HistoryListHeader = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>PAST WALKS</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  header: {
    alignSelf: 'center',
    color: colors.white,
    fontSize: 33,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    marginBottom: 30,
    marginTop: 30,
  }
});

export default HistoryListHeader;