import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import useTimer from './app/hooks/useTimer';
import TabNavigator from './app/navigator/TabNavigator';
import WalkContext from './app/context/walk_context';
import UserContext from './app/context/user_context';
import { createUser, fetchUser } from './app/api/user_api';

export default function App() {
  const [userId, setUserId] = useState();
  const [onWalk, setOnWalk] = useState(false);
  const [coords, setCoords] = useState();
  const [distance, setDistance] = useState(0);
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0);

  const handleUser = async () => {
    const value = await AsyncStorage.getItem('id');

    fetchUser(value).then(res1 => {
      if(!res1.data.id) {
        createUser()
          .then(res2 => {
              AsyncStorage.setItem('id', res2.data.id.toString());
              setUserId(value);
          })
      } else {
        setUserId(value);
      }
    });
  };

  useEffect(() => {
    handleUser();
  }, [])

  return (
    <UserContext.Provider value={{userId}}>
      <WalkContext.Provider 
        value={{ 
          onWalk, 
          setOnWalk,
          coords, 
          setCoords,
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
    </UserContext.Provider>
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
