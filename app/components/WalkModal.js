import React from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../util/colors';
import textUtil from '../util/text';

const WalkModal = ({ visible, setVisible }) => {
    return <View style={styles.container}>
        <Modal
            animationType="fade"
            visible={visible}
            onRequestClose={() => setVisible(false)}
        >
            <View style={styles.modal}>
                <Text style={textUtil}>Save Walk</Text>
                <View>
                    <MaterialCommunityIcons 
                        name="yes" 
                        size={35} 
                        color={colors.black} />
                    <MaterialCommunityIcons 
                        name="no" 
                        size={35} 
                        color={colors.black} />
                </View>
            </View>
        </Modal>
    </View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default WalkModal;