import React from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../util/colors";

const WalkStartButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    borderColor: colors.black,
    borderRadius: 40,
    borderWidth: 10,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
});

export default WalkStartButton;