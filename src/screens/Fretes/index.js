import React, { useState } from 'react'

import {
  Container,
  Scroller,
  Footer,
  FreteContainer,
  Menu,
  MenuItem,
  MenuItemText
} from './styles'

import HeaderUsuario from '../../components/HeaderUsuario'
import FreteBox from '../../components/FreteBox'

const Home = () => {
  const [menuPress, setMenuPress] = useState(1)

  return (
    <Container>
      <HeaderUsuario>
        FRETES
      </HeaderUsuario>
      <Scroller>
        <Menu>
          <MenuItem 
            style={{backgroundColor: menuPress === 1 ? '#FFA037' : '#FFFFFF'}}
            onPress={() => setMenuPress(1)}
          >
            <MenuItemText
              style={{color: menuPress === 1 ? '#FFFFFF' : '#222222'}}
            >
              Todos
            </MenuItemText>
          </MenuItem>
          <MenuItem
            style={{backgroundColor: menuPress === 2 ? '#FFA037' : '#FFFFFF'}}
            onPress={() => setMenuPress(2)}
          >
            <MenuItemText
              style={{color: menuPress === 2 ? '#FFFFFF' : '#222222'}}
            >
              Solicitados
            </MenuItemText>
          </MenuItem>
        </Menu>
        {
          menuPress === 1 ?
            <FreteContainer>
              <FreteBox 
                produto="Granito"
              />
              <FreteBox 
                produto="Granito"
              />
              <FreteBox 
                produto="Granito"
              />
              <FreteBox 
                produto="Granito"
              />
              <FreteBox 
                produto="Granito"
              />
              <FreteBox 
                produto="Granito"
              />
              <FreteBox 
                produto="Granito"
              />
              <FreteBox 
                produto="Granito"
              />
              <FreteBox 
                produto="Granito"
              />
              <FreteBox 
                produto="Granito"
              />
              <FreteBox 
                produto="Madeira"
              />
            </FreteContainer>
          :
          <FreteContainer>
            <FreteBox 
              produto="Teste"
            />
          </FreteContainer>
        }
        <Footer />
      </Scroller>
    </Container>
  )
}

export default Home