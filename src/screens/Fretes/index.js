import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
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
  const navigation = useNavigation()
  const [menuPress, setMenuPress] = useState(1)
  const i = [1, 2, 3, 4, 5]

  const handleVisitFrete = (id) => {
    navigation.navigate('VisualizarFrete', {
      id
    })
  }

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
              {
                i.map((key) => {
                  return (
                    <FreteBox 
                      key={key}
                      produto="Granito"
                      onPress={() => handleVisitFrete(key)}
                    />
                  )
                })
              }
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