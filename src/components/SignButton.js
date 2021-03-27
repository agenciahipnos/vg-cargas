import React from 'react'
import styled from 'styled-components/native'

export const CustomButton = styled.View`
  height: 60px;
  background-color: #FFA037;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`

export const CustomButtonText = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  color: #FFFFFF;
`

const SignButton = ({ children }) => {
  return (
    <CustomButton>
      <CustomButtonText>
        { children }
      </CustomButtonText>
    </CustomButton>
  )
}

export default SignButton