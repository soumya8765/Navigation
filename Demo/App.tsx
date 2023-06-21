/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screen/Home';
import Popular from './src/screen/popular';
import Fav from './src/screen/wishlist';
import Notify from './src/screen/notification';
import CustomDrawer from './src/components/Customdrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from './src/colors';
import Askq from './src/screen/Askq';
import UProfile from './src/screen/Profile';

export type DrawerTabParamlist = {
  TabScreen:undefined;
  Askq:undefined;
  UProfile:undefined;
}


  const Drawer = createDrawerNavigator<DrawerTabParamlist>();


export type HomeTabParamList = {
  Home: undefined;
  Trending: undefined;
  Wishlist: undefined;
  Notifications: undefined;
};
const Tab = createBottomTabNavigator<HomeTabParamList>();
function TabScreen() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false,tabBarActiveTintColor: COLORS.pastel}
    }>
       <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}/>
       <Tab.Screen name="Trending" component={Popular}  options={{
          tabBarLabel: 'Trending',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="crowd" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}/>
       <Tab.Screen name="Wishlist" component={Fav}  options={{
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-heart-outline" color={color} size={size} />
          ),
          tabBarBadge: 7,
        }}/>
       <Tab.Screen name="Notifications" component={Notify} options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 2,
        }} />
    </Tab.Navigator>
  );
}



function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator 
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerShown: true,
      drawerActiveBackgroundColor: '#f08080',
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#333',
      drawerLabelStyle: {
        marginLeft: -25,
        
        fontSize: 15,
      },
    }}>
      <Drawer.Screen
        name="Explore"
        component={TabScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Ask a question"
        component={Askq}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={UProfile}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;

