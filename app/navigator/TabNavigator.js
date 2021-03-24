import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

import WalkScreen from '../screens/Walk';
import HistoryScreen from '../screens/History';

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                component={WalkScreen}
                name="Walk"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="walking" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                component={HistoryScreen}
                name="History"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="content-paste" color={color} size={size} />
                    ),
                }}
            />
        </ Tab.Navigator>
    );
};

export default TabNavigator;