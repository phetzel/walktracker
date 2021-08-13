import React, { useContext, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import textUtil from "../util/text";
import WalkContext from "../context/walk_context";
import WalkControls from "./WalkControls";
import WalkModal from "./WalkModal";
import WalkTimer from "./WalkTimer";

const WalkDetails = () => {
  const { distance } = useContext(WalkContext);
  const [modVis, setModVis] = useState(false);

  return (
    <View style={styles.container}>
      <WalkModal visible={modVis} setVisible={setModVis} />
      <View>
        <Text style={textUtil}>Distance: {distance.toFixed(2)}km</Text>
        <WalkTimer />
      </View>
      <WalkControls setModVis={setModVis} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
    bottom: 25,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    position: "absolute",
    width: "95%",
  },
});

export default WalkDetails;
