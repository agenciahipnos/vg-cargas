import React from 'react'

import {
  Container,
  Scroller,
  Footer
} from './styles'

import HeaderUsuario from '../../components/HeaderUsuario'
import FreteBox from '../../components/FreteBox'

const Home = () => {
  return (
    <Container>
      <HeaderUsuario>
        Olá, Vilcimar!
      </HeaderUsuario>
      <Scroller>
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
        <Footer />
      </Scroller>
    </Container>
  )
}

export default Home