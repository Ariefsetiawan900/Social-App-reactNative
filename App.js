import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './src/screens/LoadingScreen'
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import HomeScreen from './src/screens/HomeScreen'

import * as firebase from 'firebase'

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

const AppStack = createStackNavigator({
  Home : HomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    },
  )
)