import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from './app/navigator/TabNavigator';
import WalkContext from './app/context/walk_context';

export default function App() {
  const [ onWalk, setOnWalk ] = useState(false);

  return (
    <WalkContext.Provider value={{ onWalk, setOnWalk }}>
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
