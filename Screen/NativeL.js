// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
import {
  View,
} from 'react-native';
import { NativeBaseProvider, Box } from "native-base";


import Loader from './Components/Loader';

const NativeL = ({navigation}) => {

  return (
    <NativeBaseProvider>
    <Box>Hello world</Box>
  </NativeBaseProvider>
  );
};
export default NativeL;
