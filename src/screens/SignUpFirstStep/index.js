import React, { useState } from 'react'

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
import Email from '../../assets/email.svg'

import SignInput from '../../components/SignInput'
import SignButton from '../../components/SignButton'

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
            <SignInput 
              IconSvg={Email}
              placeholder="Nome Completo"
              value={nameField}
              onChangeText={(text) => setNameField(text)}
            />
            <SignInput 
              IconSvg={Email}
              placeholder="CPF"
              value={cpfField}
              onChangeText={(text) => setCpfField(text)}
            />
            <SignInput 
              IconSvg={Email}
              placeholder="E-mail"
              value={emailField}
              onChangeText={(text) => setEmailField(text)}
            />
            <SignInput 
              IconSvg={Email}
              placeholder="Senha"
              value={passwordField}
              onChangeText={(text) => passwordConfirmationField(text)}
            />
            <SignInput 
              IconSvg={Email}
              placeholder="Confirme a Senha"
              value={passwordConfirmationField}
              onChangeText={(text) => setPasswordConfirmationField(text)}
            />
            <SignInput 
              IconSvg={Email}
              placeholder="Data de Nascimento"
              value={birthdateField}
              onChangeText={(text) => setBirthdateField(text)}
            />
            <SignInput 
              IconSvg={Email}
              placeholder="Carteira de Motorista"
              value={cnhField}
              onChangeText={(text) => setCnhField(text)}
            />
          </InputArea>
          <SignButton>
            Próximo
          </SignButton>
        </ScrollerContainer>
      </Scroller>
    </Container>
  )
}

export default SignUpFirstStep