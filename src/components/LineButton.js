import React from 'react'
import styled from 'styled-components/native'

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  border: 2px solid #FFA037;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

export const CustomButtonText = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  color: #FFA037;
`

const LineButton = ({ children, onPress }) => {
  return (
    <CustomButton onPress={onPress}>
      <CustomButtonText>
        { children }
      </CustomButtonText>
    </CustomButton>
  )
}

export default LineButton