import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../util/colors';
import HistoryListItem from '../components/HistoryListItem';
import HistoryListHeader from '../components/HistoryListHeader';
import Screen from '../components/Screen';
import WalkContext from '../context/walk_context';
import UserContext from '../context/user_context';

import { fetchWalks } from '../api/walk_api';

const History = (props) => {
    const [walks, setWalks] = useState();
    const [deleted, setDeleted] = useState(false);
    const { userId } = useContext(UserContext);
    const { onWalk } = useContext(WalkContext);

    const fetchUserWalks = () => {
        const obj = { user_id: userId}
        console.log(obj);
        fetchWalks(obj).then(res => {
            console.log(res);
            setWalks(res.data.reverse());
        })
        setDeleted(false);
    }

    useEffect(() => {
        fetchUserWalks();
    }, [onWalk, deleted, userId]);


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
                            act={item.activity}
                            dist={item.distance}
                            date={item.created_at}
                            setDeleted={setDeleted} 
                            time={item.time} />
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