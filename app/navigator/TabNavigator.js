import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome5, Fontisto } from "@expo/vector-icons";

import colors from '../util/colors';
import { normalize } from '../util/dimensions';
import Stats from '../screens/Stats';
import WalkScreen from '../screens/Walk';
import HistoryNavigator from './HistoryNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
    return (
        <Tab.Navigator
            initialRouteName="Start"
            tabBarOptions={{
                activeTintColor: colors.blue,
                style: {
                    paddingTop: normalize(5),
                    paddingBottom: normalize(10),
                    height: normalize(80)
                }
            }}
        >
            <Tab.Screen 
                component={HistoryNavigator}
                name="History"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="content-paste" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                component={WalkScreen}
                name="Start"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="walking" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                component={Stats}
                name="Stats"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Fontisto name="bar-chart" size={size} color={color} />
                    ),
                }}
            />
        </ Tab.Navigator>
    );
};

export default TabNavigator;