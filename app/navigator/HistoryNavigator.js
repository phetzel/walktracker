import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import History from '../screens/History';
import HistoryShow from '../screens/HistoryShow';

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator  
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="Index" component={History} />
    <Stack.Screen name="Show" component={HistoryShow} />
  </Stack.Navigator>
);

export default StackNavigator;