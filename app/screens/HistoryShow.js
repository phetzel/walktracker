import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { fetchWalk, destroyWalk } from '../api/walk_api';
import colors from '../util/colors';
import HistoryShowDetails from '../components/HistoryShowDetails';
import HistoryShowMap from '../components/HistoryShowMap';
import text from '../util/text';
import Screen from '../components/Screen';

const HistoryShow = ({ navigation, route }) => {
    const [walk, setWalk] = useState();
    const { id, setDeleted } = route.params;

    const handleDelete = () => {
        destroyWalk(walk.id)
            .then(() => {
                setDeleted(true);
                navigation.navigate('Index');
            });
    }

    useEffect(() => {
        fetchWalk(id).then(res => {
            setWalk(res.data);
        })
    }, []);
    
    return (
        <Screen>
            <View style={styles.container}>
                { walk &&
                    <View>
                        <HistoryShowMap 
                            coords={walk.lat_lngs}/>

                        <HistoryShowDetails 
                            distance={walk.distance}
                            date={walk.created_at} 
                            time={walk.time} />
                    </View>
                }
                
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={handleDelete}>
                    <Text style={text}>Delete</Text>
                </TouchableOpacity>

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
    container: {
        height: '100%',
        width: '100%'
    },
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
  deleteButton : {
        alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: colors.red,
      borderRadius: 5,
      justifyContent: 'center',
      padding: 5,
      height: 50,
      width: 100,
  }
});

export default HistoryShow;