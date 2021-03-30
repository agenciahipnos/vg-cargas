import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Scroller = styled.ScrollView`
  flex: 1;
`

export const Footer = styled.View`
  height: 20px;
`

export const FreteContainer = styled.View`
  padding: 0 20px;
`

export const Menu = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  border-bottom-width: 2px;
  border-bottom-color: #FFA037;
`

export const MenuItem = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 50px;
`

export const MenuItemText = styled.Text`
  font-weight: bold;
  text-transform: uppercase;
`