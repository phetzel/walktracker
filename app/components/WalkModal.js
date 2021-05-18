import React, { useContext } from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../util/colors';
import { createWalk } from '../api/walk_api';
import { createLatLng } from '../api/lat_lng_api';
import textUtil from '../util/text';
import WalkContext from '../context/walk_context';
import UserContext from '../context/user_context';

const WalkModal = ({ visible, setVisible }) => {
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

    const handleSave = () => {
        const data = new FormData();
        data.append('walk[user_id]',  userId);
        data.append('walk[distance]', distance);
        data.append('walk[time]', timer);

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
                setCoords();
            });
    }

    const handleNoSave = () => {
        handleReset();
        setDistance(0);
        setOnWalk(false);
        setCoords();
    }


    return (
        <Modal
            animationType="fade"
            visible={visible || false}
            onRequestClose={() => setVisible(visible)}
        >
            <View style={styles.modal}>
                <Text style={textUtil}>Would you like to save this walk?</Text>
                <View style={styles.modalIcons}>
                    <TouchableOpacity
                        onPress={handleSave}>
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
        </Modal>
    );
};

const styles = StyleSheet.create({
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