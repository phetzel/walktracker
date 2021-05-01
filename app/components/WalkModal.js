import React from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../util/colors';
import { createWalk } from '../api/walk_api';
import textUtil from '../util/text';

const WalkModal = ({ visible, setVisible }) => {
    const handleSave = () => {
        createWalk();
    }

    return (
        <Modal
            animationType="fade"
            visible={false}
            onRequestClose={() => setVisible(false)}
        >
            <View style={styles.modal}>
                <Text style={textUtil}>Would you ike to save this walk?</Text>
                <View style={styles.modalIcons}>
                    <MaterialCommunityIcons 
                        name="check-box-outline" 
                        size={35} 
                        color={colors.green} />
                    <MaterialCommunityIcons 
                        name="close-box-outline" 
                        size={35} 
                        color={colors.red} />
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