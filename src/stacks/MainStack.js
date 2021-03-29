import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import Preload from '../screens/Preload'
import SignIn from '../screens/SignIn'

import SignUpFirstStep from '../screens/SignUpFirstStep'
import SignUpSecondStep from '../screens/SignUpSecondStep'
import SingUpThirdStep from '../screens/SignUpThirdStep'

const Stack = createStackNavigator()

const MainStack = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#444A5C" />
      <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal'
        }}
      >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUpFirstStep" component={SignUpFirstStep} />
        <Stack.Screen name="SignUpSecondStep" component={SignUpSecondStep} />
        <Stack.Screen name="SignUpThirdStep" component={SingUpThirdStep} />

      </Stack.Navigator>
    </>
  )
}

export default MainStack