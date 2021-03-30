import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CustomTabBar from '../components/CustomTabBar'
import Home from '../screens/Home'
import Fretes from '../screens/Fretes'
import Perfil from '../screens/Perfil'
import Opcoes from '../screens/Opcoes'

const Tab = createBottomTabNavigator()

const UsuarioTab = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar { ...props } />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Fretes" component={Fretes} />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Opcoes" component={Opcoes} />
    </Tab.Navigator>
  )
}

export default UsuarioTab