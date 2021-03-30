import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  Wrapper,
  Container,
  LogoContent,
  InputArea,
  RecoverPasswordText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold
} from './styles'
import SignInput from '../../components/SignInput'
import SignButton from '../../components/SignButton'

import Logo from '../../assets/logo.svg'
import Email from '../../assets/email.svg'
import Password from '../../assets/lock.svg'

const SignIn = () => {
  const navigation = useNavigation()

  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')

  const handleSignIn = () => {
    navigation.reset({
      routes: [{ name: 'UsuarioTab' }]
    })
  }

  const handleSignUp = () => {
    navigation.reset({
      routes: [{ name: 'SignUpFirstStep' }]
    })
  }

  return (
    <Wrapper>
      <Container>
        <LogoContent>
          <Logo 
            width="129"
            height="84" 
            fill="#FFFFFF"
          />
        </LogoContent>
        <InputArea>
          <SignInput 
            IconSvg={Email}
            placeholder="Digite seu e-mail"
            value={emailField}
            onChangeText={(text) => setEmailField(text)}
          />
          <SignInput
            IconSvg={Password}
            placeholder="Digite sua senha"
            value={passwordField}
            onChangeText={(text) => setPasswordField(text)}
            password={true}
          />
          <RecoverPasswordText>
            Esqueceu sua senha?
          </RecoverPasswordText>
          <SignButton onPress={handleSignIn}>
            Login
          </SignButton>
        </InputArea>
        <SignMessageButton onPress={handleSignUp}>
          <SignMessageButtonText>
            Ainda não possui uma conta?
          </SignMessageButtonText>
          <SignMessageButtonTextBold>
            Cadastre-se
          </SignMessageButtonTextBold>
        </SignMessageButton>
      </Container>
    </Wrapper>
  )
}

export default SignIn