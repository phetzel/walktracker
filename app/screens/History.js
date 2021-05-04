import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../util/colors';
import HistoryListItem from '../components/HistoryListItem';
import HistoryListHeader from '../components/HistoryListHeader';
import Screen from '../components/Screen';
import WalkContext from '../context/walk_context';
import { createUser, fetchUser } from '../api/user_api';


const History = (props) => {
    const [walks, setWalks] = useState();
        const { onWalk } = useContext(WalkContext);

    const fetchUserWalks = async () => {
        const value = await AsyncStorage.getItem('id');
        console.log(value);

        if (value != null) {
            fetchUser(value).then(res => {
                setWalks(res.data.walks);
            })
        } else {
            createUser()
                .then(res => {
                    console.log(res);
                    AsyncStorage.setItem('id', res.data.id.toString());
                })
        }
    }

    useEffect(() => {
        fetchUserWalks();
    }, [onWalk]);

    return (
        <Screen style={styles.container}>
            <View style={styles.list}>
                <FlatList 
                    contentContainerStyle={{ flexGrow: 1 }}
                    data={walks}
                    keyExtractor={walk => walk.id.toString()}
                    ListHeaderComponent={() => <HistoryListHeader />}
                    renderItem={({item}) => 
                        <HistoryListItem 
                            id={item.id} 
                            dist={item.distance}
                            date={item.created_at} />
                    }
                />
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
  list: {
      backgroundColor: colors.black,
      height: '100%',
      width: '100%'
  },
});

export default History;