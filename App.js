import React from 'react'
import * as firebase from 'firebase'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from "react-navigation-tabs"
import Icon from 'react-native-vector-icons/FontAwesome';

import LoadingScreen from './src/screens/LoadingScreen'
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
// import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import ChatScreen from './src/screens/ChatScreen'
import LocationScreen from './src/screens/LocationScreen'


var firebaseConfig = {
  apiKey: "AIzaSyAD2C-BR6FnaL8BDIOk0E-Q5CAakLHuiq4",
  authDomain: "socialchatt-8cc16.firebaseapp.com",
  databaseURL: "https://socialchatt-8cc16.firebaseio.com",
  projectId: "socialchatt-8cc16",
  storageBucket: "socialchatt-8cc16.appspot.com",
  messagingSenderId: "716283808084",
  appId: "1:716283808084:web:41f105d76abc2133a4a0c1",
  measurementId: "G-CRYH004NTZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const AppTabNavigator = createBottomTabNavigator(
  {
    Location: {
      screen: LocationScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon color={'#fff'} name="wpexplorer" size={25} />
        ),
        header: null,
      },
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon color={'#fff'} name="comment-o" size={25} />
        ),
        header: null,
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon color={'#fff'} name="user" size={25} />
        ),
        header: null,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#2f2c2c',
      inactiveTintColor: '#878787',
      showLabel: false,
      inactiveBackgroundColor: '#2f2c2c',
      activeBackgroundColor: '#878787',
    },
  },
);





// const AppStack = createStackNavigator({
//   Home : HomeScreen
// })

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading",
    },
  )
)