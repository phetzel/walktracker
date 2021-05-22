import React, { useContext, useState } from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

import colors from '../util/colors';
import { createWalk } from '../api/walk_api';
import { createLatLng } from '../api/lat_lng_api';
import textUtil from '../util/text';
import WalkContext from '../context/walk_context';
import UserContext from '../context/user_context';

const WalkModal = ({ visible, setVisible }) => {
    const navigation = useNavigation();
    const { userId } = useContext(UserContext);
    const { 
        coords,
        setCoords,
        timer,
        handleReset,
        setOnWalk,
        distance,
        setDistance
    } = useContext(WalkContext);
    const [dispAct, setDispAct] = useState(false);
    const [act, setAct] = useState('walk');

    const handleSave = () => {
        const data = new FormData();
        data.append('walk[user_id]',  userId);
        data.append('walk[distance]', distance);
        data.append('walk[time]', timer);
        data.append('walk[activity]', act);

        createWalk(data)
            .then(res => {
                coords.forEach(coord => {
                    const coordObj = new FormData();
                    coordObj.append('lat_lng[walk_id]', res.data.id);
                    coordObj.append('lat_lng[latitude]', coord.latitude);
                    coordObj.append('lat_lng[longitude]', coord.longitude);

                    createLatLng(coordObj);
                })
                
                handleReset();
                setDistance(0);
                setOnWalk(false);
                setCoords([]);
                navigation.navigate('History');
            });
    }

    const handleNoSave = () => {
        handleReset();
        setDistance(0);
        setOnWalk(false);
        setCoords([]);
    }

    const content = dispAct ? (
                <View style={styles.modal}>
            <Text style={textUtil}>Choose an activity type</Text>
 
            <Picker 
                selectedValue={act}
                style={styles.activitiesPicker}
                onValueChange={(itemVal, itemIdx) => {
                    setAct(itemVal);
                }}>
                <Picker.Item label="Walk" value="walk" />
                <Picker.Item label="Bike" value="bike" />
                <Picker.Item label="Skate" value="roller-skate" />
                <Picker.Item label="Other" value="star" />
            </Picker>


            <View style={styles.activitiesIcons}>
                <TouchableOpacity
                    onPress={handleSave}>
                    <MaterialCommunityIcons 
                        name="check-box-outline" 
                        size={35} 
                        color={colors.green} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setDispAct(false)}>
                    <MaterialCommunityIcons 
                        name="close-box-outline" 
                        size={35} 
                        color={colors.red} />
                </TouchableOpacity>
            </View>
        </View>
    ) : (

        <View style={styles.modal}>
            <Text style={textUtil}>Would you like to save this walk?</Text>
            <View style={styles.modalIcons}>
                <TouchableOpacity
                    // onPress={handleSave}>
                    onPress={() => setDispAct(true)}>
                    <MaterialCommunityIcons 
                        name="check-box-outline" 
                        size={35} 
                        color={colors.green} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleNoSave}>
                    <MaterialCommunityIcons 
                        name="close-box-outline" 
                        size={35} 
                        color={colors.red} />
                </TouchableOpacity>
            </View>
        </View>
    );


    return (
        <Modal
            animationType="fade"
            visible={visible || false}
            onRequestClose={() => setVisible(visible)}
        >
            {content}
        </Modal>
    );
};

const styles = StyleSheet.create({
    activitiesIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: '33%',
    },
    activitiesPicker: {
        height: 200,
        width: 200
    },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    modalIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: '33%',
    }
});

export default WalkModal;