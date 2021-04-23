import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from './app/navigator/TabNavigator';
import WalkContext from './app/context/walk_context';

export default function App() {
  const [onWalk, setOnWalk] = useState(false);
  const [timer, setTimer] = useState(0);

  return (
    <WalkContext.Provider 
      value={{ 
        onWalk, 
        setOnWalk,
        timer,
        setTimer }}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </WalkContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
