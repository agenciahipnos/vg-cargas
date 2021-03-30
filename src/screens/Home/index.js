import React, { useState } from 'react'

import {
  Container,
  Scroller,
  Footer,
  FreteContainer,
  LocationArea,
  LocationInput,
  LocationFinder,
  InfoFrete,
  FreteText,
  FreteIcon,
  FreteIconText
} from './styles'

import HeaderUsuario from '../../components/HeaderUsuario'
import FreteBox from '../../components/FreteBox'

import MyLocationIcon from '../../assets/my_location.svg'

const Home = () => {
  const [locationText, setLocationText] = useState('')

  return (
    <Container>
      <HeaderUsuario>
        Olá, Vilcimar!
      </HeaderUsuario>
      <Scroller>
        <LocationArea>
          <LocationFinder>
            <MyLocationIcon width="24" height="24" fill="#FFF" />
          </LocationFinder>
          <LocationInput
            placeholder="Onde você está?"
            placeholderTextColor="#FFFFFF"
            value={locationText}
            onChangeText={(text) => setLocationText(text)}
          />
        </LocationArea>
        <FreteContainer>
          <InfoFrete>
            <FreteText>
              Confira alguns fretes disponíveis
            </FreteText>
            <FreteIcon>
              <FreteIconText>
                i
              </FreteIconText>
            </FreteIcon>
          </InfoFrete>
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
        <Footer />
      </Scroller>
    </Container>
  )
}

export default Home