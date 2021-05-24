import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import colors from '../util/colors';
import HistoryListItem from '../components/HistoryListItem';
import HistoryListHeader from '../components/HistoryListHeader';
import Screen from '../components/Screen';
import WalkContext from '../context/walk_context';
import UserContext from '../context/user_context';

import SwitchActivity from '../components/SwitchActivity';
import { fetchWalks } from '../api/walk_api';

const History = (props) => {
    const { userId } = useContext(UserContext);
    const { onWalk } = useContext(WalkContext);
    const [walks, setWalks] = useState([]);
    const [deleted, setDeleted] = useState(false);
    const [activity, setActivity] = useState();
    const [page, setPage] = useState(0);

    const handleActivity = (type) => {
        if (activity != type) {
            setPage(0);
        }
        setActivity(type);
    }
    
    const fetchUserWalks = () => {
        const obj = { 
            user_id: userId, 
            activity: activity,
            page: page
        };
        fetchWalks(obj).then(res => {
            const newWalks = [...walks, ...res.data.reverse()]
            setWalks(newWalks);
        })
        setDeleted(false);
    }

    useEffect(() => {
        fetchUserWalks();
    }, [onWalk, deleted, userId, activity, page]);


    return (
        <Screen style={styles.container}>
            <View style={styles.list}>
                <HistoryListHeader />
                <SwitchActivity func={handleActivity} />
                <FlatList 
                    contentContainerStyle={{ flexGrow: 1 }}
                    data={walks}
                    keyExtractor={walk => walk.id.toString()}
                    renderItem={({item}) => 
                        <HistoryListItem 
                            id={item.id} 
                            act={item.activity}
                            dist={item.distance}
                            date={item.created_at}
                            setDeleted={setDeleted} 
                            time={item.time} />
                    }
                    onEndReached={() => setPage(page + 1)}
                    onEndReachedThreshold={0}
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