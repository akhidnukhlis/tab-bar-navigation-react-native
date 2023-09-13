import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import FindScreen from '../screens/FindScreen';
import ChatScreen from '../screens/ChatScreen';
import PostScreen from '../screens/PostScreen';
import SettingScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity style={{
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    ...styles.shadow
  }}
    onPress={onPress}
  >
    <View style={{
      width: 62,
      height: 62,
      borderRadius: 35,
      backgroundColor: '#E82126'
    }}
    >
      {children}
    </View>
  </TouchableOpacity>
)

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Use this to hide the header
        tabBarShowLabel: false,
        tabBarStyle: {
            position: "absolute",
            bottom: 25,
            left: 18,
            right: 18,
            elevation: 0,
            backgroundColor: "#ffffff",
            borderRadius: 30,
            height: 80,
            ...styles.shadow,
        }
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../../assets/icons/home.png')}
                resizeMode='contain'
                style={{
                  width: 22,
                  height: 22,
                  marginLeft: 20,
                  tintColor: focused ? '#E82126' : '#D9D9D9'
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen name='Find' component={FindScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../../assets/icons/find.png')}
                resizeMode='contain'
                style={{
                  width: 22,
                  height: 22,
                  tintColor: focused ? '#E82126' : '#D9D9D9'
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen name='Post' component={PostScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/icons/post.png')}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: '#ffff'
              }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
        }}
      />
      <Tab.Screen name='Setting' component={SettingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../../assets/icons/setting.png')}
                resizeMode='contain'
                style={{
                  width: 22,
                  height: 22,
                  tintColor: focused ? '#E82126' : '#D9D9D9'
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen name='Chat' component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../../assets/icons/chat.png')}
                resizeMode='contain'
                style={{
                  width: 22,
                  height: 22,
                  marginRight: 20,
                  tintColor: focused ? '#E82126' : '#D9D9D9'
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#D9D9D9",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }
});

export default Tabs;

