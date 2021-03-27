import React from 'react'
import styled from 'styled-components/native'

const InputArea = styled.View`
  margin-bottom: 20px;
`

const InputText = styled.Text`
  font-size: 15px;
  text-transform: uppercase;
  color: #FFFFFF;
  font-weight: bold;
  margin-bottom: 8px;
  margin-left: 18px;
`

const Input = styled.TextInput`
  width: 100%;
  background-color: #60677A;
  height: 60px;
  border-radius: 30px;
  color: #FFFFFF;
  font-size: 16px;
  padding: 10px 20px;
`

const SignUpInput = ({ value, onChangeText, label, password = false }) => {
  return (
    <InputArea>
      <InputText>
        {label}
      </InputText>
      <Input
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  )
}

export default SignUpInput