import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import colors from '../util/colors';
import HistoryListItem from '../components/HistoryListItem';
import HistoryListHeader from '../components/HistoryListHeader';
import Screen from '../components/Screen';
import { createUser, fetchUser } from '../api/user_api';


const History = (props) => {
    const [walks, setWalks] = useState();

    useEffect(() => {
        fetchUser(1).then(res => {
           setWalks(res.data.walks);
        })
    }, []);

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