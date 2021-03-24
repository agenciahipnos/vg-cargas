import React, { useEffect } from 'react'
import { Container, LoadingIcon } from './styles'
import { useNavigation } from '@react-navigation/native'
import Logo from '../../assets/logo.svg'

const Preload = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn')
    }, 2000);
  }, [])

  return (
    <Container>
      <Logo 
        width="170"
        height="111"
      />
      <LoadingIcon 
        size="large"
        color="#FFFFFF"
      />
    </Container>
  )
}

export default Preload