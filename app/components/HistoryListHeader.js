import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import colors from '../util/colors';

const HistoryListHeader = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Past Walks</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  header: {
    color: colors.white,
    fontSize: 33,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  }
});

export default HistoryListHeader;