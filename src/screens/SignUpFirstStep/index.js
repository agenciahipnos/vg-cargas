import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

import { 
  Container,
  Scroller,
  ScrollerContainer,
  HeaderSteps,
  BoxIcon,
  IconText,
  BoxStepLine,
  StepLine,
  InputArea,
  HeaderText
} from './styles'

import Info from '../../assets/info.svg'
import Localizacao from '../../assets/localizacao.svg'
import Veiculo from '../../assets/veiculo.svg'

import SignUpInput from '../../components/SignUpInput'
import SignButton from '../../components/SignButton'
import LineButton from '../../components/LineButton'

const SignUpFirstStep = () => {
  const [nameField, setNameField] = useState('')
  const [cpfField, setCpfField] = useState('')
  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')
  const [passwordConfirmationField, setPasswordConfirmationField] = useState('')
  const [birthdateField, setBirthdateField] = useState('')
  const [cnhField, setCnhField] = useState('')

  return (
    <Container>
      <Scroller>
        <ScrollerContainer>
          <HeaderSteps>
            <BoxIcon>
              <Info 
                width="30.85"
                height="27.56"
              />
              <IconText active={true}>
                Informações básicas
              </IconText>
            </BoxIcon>
            <BoxStepLine>
              <StepLine active={false} />
            </BoxStepLine>
            <BoxIcon>
              <Localizacao 
                width="32.94"
                height="33"
              />
              <IconText active={false}>
                Localização
              </IconText>
            </BoxIcon>
            <BoxStepLine>
              <StepLine active={false} />
            </BoxStepLine>
            <BoxIcon>
              <Veiculo 
                width="37"
                height="37"
              />
              <IconText active={false}>
                Veículo
              </IconText>
            </BoxIcon>
          </HeaderSteps>
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
              onChangeText={(text) => passwordConfirmationField(text)}
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
          <LineButton>
            Voltar
          </LineButton>
          <SignButton>
            Próximo
          </SignButton>
        </ScrollerContainer>
      </Scroller>
    </Container>
  )
}

export default SignUpFirstStep