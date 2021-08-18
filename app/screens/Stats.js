import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../util/colors";
import Screen from "../components/Screen";
import StatsDetails from "../components/StatsDetails";
import SwitchActivity from "../components/SwitchActivity";
import SwitchTimes from "../components/SwitchTimes";
import UserContext from "../context/user_context";
import WalkContext from "../context/walk_context";
import { fetchWalks } from "../api/walk_api";

const Stats = (props) => {
  const { userId } = useContext(UserContext);
  const { onWalk } = useContext(WalkContext);
  const [walks, setWalks] = useState();
  const [time, setTime] = useState("all");
  const [activity, setActivity] = useState();

  useEffect(() => {
    const obj = { user_id: userId, date: time, activity: activity };
    fetchWalks(obj).then((res) => {
      setWalks(res.data);
    });
  }, [time, activity, onWalk]);

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.header}>STATS</Text>
        <SwitchTimes func={setTime} />
        <SwitchActivity func={setActivity} />

        {walks && (
          <StatsDetails activity={activity} time={time} walks={walks} />
        )}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    width: "100%",
  },
  header: {
    alignSelf: "center",
    color: colors.white,
    fontSize: 33,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    marginBottom: 30,
    marginTop: 30,
  },
});

export default Stats;
