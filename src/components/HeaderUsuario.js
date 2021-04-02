import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import Person from '../assets/person.svg'
import LogoIcon from '../assets/logo-icon.svg'
import BackIcon from '../assets/left-arrow.svg'

const Container = styled.View`
  flex-direction: row;
  padding: 10px 20px;
  background-color: #FFF;
`

const LogoContent = styled.View`
  flex: 1;
  justify-content: center;
`

const TitleContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const PerfilIcon = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  position: relative;
`

const HeaderTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`

const NotificationContainer = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: red;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`

const NotificationNumber = styled.Text`
  color: #fff;
  font-size: 10px; 
`

const HeaderUsuario = ({ children, voltar = false, handleVoltar}) => {
  return (
    <Container>
      <LogoContent>
        {
          !voltar ? <LogoIcon width="53" height="40" /> 
          : 
          <TouchableOpacity
            onPress={handleVoltar}
          >
            <BackIcon width="22" height="22" fill="#222" />
          </TouchableOpacity>
        }
      </LogoContent>
      <TitleContent>
        <HeaderTitle>
          { children }
        </HeaderTitle>
      </TitleContent>
      <PerfilIcon>
        <Person width="43" height="43" /> 
        <NotificationContainer>
          <NotificationNumber>
            2
          </NotificationNumber>
        </NotificationContainer>
      </PerfilIcon>
    </Container>
  )
}

export default HeaderUsuario