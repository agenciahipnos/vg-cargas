import React, { useState } from 'react'
import {
  Container,
  InputArea,
  RecoverPasswordText,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold
} from './styles'
import SignInput from '../../components/SignInput'

import Logo from '../../assets/logo.svg'
import Email from '../../assets/email.svg'
import Password from '../../assets/lock.svg'

const SignIn = () => {
  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')

  return (
    <Container>
      <Logo 
        width="129"
        height="84" 
      />
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
        <CustomButton>
          <CustomButtonText>
            Login
          </CustomButtonText>
        </CustomButton>
      </InputArea>
      <SignMessageButton>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>
          Cadastre-se
        </SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  )
}

export default SignIn