import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import useTimer from './app/hooks/useTimer';
import TabNavigator from './app/navigator/TabNavigator';
import WalkContext from './app/context/walk_context';

export default function App() {
  const [onWalk, setOnWalk] = useState(false);
  const [distance, setDistance] = useState(0);
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0);

  return (
    <WalkContext.Provider 
      value={{ 
        onWalk, 
        setOnWalk,
        distance,
        setDistance,
        timer,
        isActive,
        isPaused,
        handleStart,
        handlePause,
        handleResume,
        handleReset }}>
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
