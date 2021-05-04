import React, { useContext } from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../util/colors';
import { createWalk } from '../api/walk_api';
import { createUser } from '../api/user_api';
import textUtil from '../util/text';
import WalkContext from '../context/walk_context';

const WalkModal = ({ visible, setVisible }) => {
    const { 
        timer,
        handleReset,
        setOnWalk,
        distance,
        setDistance
    } = useContext(WalkContext);

    const handleSave = async () => {
        const value = await AsyncStorage.getItem('id');
        let id;

        if (value != null) {
            id = value;
        } else {
            createUser()
                .then(res => {
                    AsyncStorage.setItem('id', res.data.id.toString());
                    id = value;
                })
        }

        const data = new FormData();
        data.append('walk[user_id]', id);
        data.append('walk[distance]', distance);

        createWalk(data);

        handleReset();
        setDistance(0);
        setOnWalk(false);
    }

    const handleNoSave = () => {
        handleReset();
        setDistance(0);
        setOnWalk(false);
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