import React from 'react'
import styled from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #444A5C;
`

export const Container = styled.ScrollView`

`

export const LogoContent = styled.View`
  align-items: center;
  margin-top: 40px;
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

export const SignMessageButton = styled.TouchableOpacity`
  justify-content: center;
  margin-bottom: 40px;
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