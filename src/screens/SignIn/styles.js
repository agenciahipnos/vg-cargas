import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background-color: #444A5C;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const InputArea = styled.View`
  width: 100%;
  padding: 60px 30px 80px 30px;
`

export const RecoverPasswordText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #FFA037;
  margin-bottom: 40px;
  opacity: 0.8;
`

export const CustomButton = styled.View`
  height: 60px;
  background-color: #252832;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`

export const CustomButtonText = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  color: #FFA037;
`

export const SignMessageButton = styled.TouchableOpacity`
  justify-content: center;
`

export const SignMessageButtonText = styled.Text`
  font-size: 14px;
  color: #FFF;
  text-align: center;
  margin-bottom: 10px;
`

export const SignMessageButtonTextBold = styled.Text`
  font-size: 14px;
  color: #FFA037;
  font-weight: bold;
  text-align: center;
`