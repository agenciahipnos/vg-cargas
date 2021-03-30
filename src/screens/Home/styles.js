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

export const LocationArea = styled.View`
  background-color: #444A5C;
  flex-direction: row;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

export const LocationInput = styled.TextInput`
  margin-left: 10px;
  color: #FFF;
`

export const LocationFinder = styled.TouchableOpacity`

`

export const InfoFrete = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

export const FreteText = styled.Text`

`

export const FreteIcon = styled.View`
  margin-left: 8px;
  border: 1px solid #FFA037;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
`

export const FreteIconText = styled.Text`
  color: #FFA037;
`