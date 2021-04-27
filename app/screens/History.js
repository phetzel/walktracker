import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import colors from '../util/colors';
import HistoryListItem from '../components/HistoryListItem';

const walks = [
    { id: 1, dist: 2.5, date: '8/31/2019'},
    { id: 2, dist: 7.4, date: '9/31/2019'},
    { id: 3, dist: 2.3, date: '10/31/2019'},
    { id: 4, dist: 4.5, date: '3/31/2020'},
    { id: 5, dist: 6.6, date: '9/31/2020'},
    { id: 6, dist: 1.5, date: '12/31/2020'},
    { id: 7, dist: .5, date: '1/31/2021'}
]

const History = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList 
                    contentContainerStyle={{ flexGrow: 1 }}
                    data={walks}
                    keyExtractor={walk => walk.id.toString()}
                    renderItem={({item}) => 
                        <HistoryListItem 
                            id={item.id} 
                            dist={item.dist}
                            date={item.date} />
                    }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.black,
      flex: 1
  },
  list: {
      backgroundColor: colors.green,
    // height: '100%'
  }
});

export default History;