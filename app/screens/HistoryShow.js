import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { fetchWalk } from '../api/walk_api';
import colors from '../util/colors';
import text from '../util/text';
import Screen from '../components/Screen';

const HistoryShow = ({ navigation, route }) => {
    const [walk, setWalk] = useState();

    useEffect(() => {
        fetchWalk(route.params.id).then(res => {
            setWalk(res.data);
        })
    }, []);
    
    return (
        <Screen>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate('Index')}>
                    <Text style={text}>Back</Text>
                </TouchableOpacity>
            </View>
        </Screen>
    )
    ;
};
const styles = StyleSheet.create({
  backButton: {
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: colors.blue,
      borderRadius: 5,
      justifyContent: 'center',
      padding: 5,
      height: 50,
      width: 100,
  },
});

export default HistoryShow;