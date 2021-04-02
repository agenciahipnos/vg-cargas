import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { 
  Container,
  Scroller,
  ScrollerContainer,
  InputArea,
  HeaderText
} from './styles'
 
import SignUpInput from '../../components/SignUpInput'
import SignButton from '../../components/SignButton'
import LineButton from '../../components/LineButton'
import HeaderSteps from '../../components/HeaderSteps'

const SignUpFirstStep = () => {
  const navigation = useNavigation()

  const [nameField, setNameField] = useState('')
  const [cpfField, setCpfField] = useState('')
  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')
  const [passwordConfirmationField, setPasswordConfirmationField] = useState('')
  const [birthdateField, setBirthdateField] = useState('')
  const [cnhField, setCnhField] = useState('')

  const handleVoltar = () => {
    navigation.navigate('SignIn')
  }

  const handleProximo = () => {
    navigation.navigate('SignUpSecondStep')
  }

  return (
    <Container>
      <Scroller>
        <ScrollerContainer>
          <HeaderSteps step={1} />
          <HeaderText>
            Vamos começar coletando algumas informações básicas sobre você.
          </HeaderText>
          <InputArea>
            <SignUpInput 
              label="Nome Completo"
              value={nameField}
              onChangeText={(text) => setNameField(text)}
            />
            <SignUpInput 
              label="CPF"
              value={cpfField}
              onChangeText={(text) => setCpfField(text)}
            />
            <SignUpInput 
              label="E-mail"
              value={emailField}
              onChangeText={(text) => setEmailField(text)}
            />
            <SignUpInput 
              label="Senha"
              value={passwordField}
              onChangeText={(text) => setPasswordField(text)}
              password={true}
            />
            <SignUpInput 
              label="Confirme a Senha"
              value={passwordConfirmationField}
              onChangeText={(text) => setPasswordConfirmationField(text)}
              password={true}
            />
            <SignUpInput 
              label="Data de Nascimento"
              value={birthdateField}
              onChangeText={(text) => setBirthdateField(text)}
            />
            <SignUpInput 
              label="Carteira de Motorista"
              value={cnhField}
              onChangeText={(text) => setCnhField(text)}
            />
          </InputArea>
          <LineButton
            onPress={handleVoltar}
          >
            Voltar
          </LineButton>
          <SignButton 
            onPress={handleProximo}
          >
            Próximo
          </SignButton>
        </ScrollerContainer>
      </Scroller>
    </Container>
  )
}

export default SignUpFirstStep