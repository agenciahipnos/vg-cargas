import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  Container,
  Scroller,
  ScrollerContainer,
  HeaderText,
  InputArea
} from './styles'

import HeaderSteps from '../../components/HeaderSteps'
import SignUpInput from '../../components/SignUpInput'
import LineButton from '../../components/LineButton'
import SignButton from '../../components/SignButton'

const SignUpSecondStep = () => {
  const navigation = useNavigation()

  const [cepField, setCepField] = useState('')
  const [estadoField, setEstadoField] = useState('')
  const [cidadeField, setCidadeField] = useState('')
  const [bairroField, setBairroField] = useState('')
  const [enderecoField, setEnderecoField] = useState('')

  const handleVoltar = () => {
    navigation.navigate('SignUpFirstStep')
  }

  const handleProximo = () => {
    navigation.navigate('SignUpThirdStep')
  }

  return (
    <Container>
      <Scroller>
        <ScrollerContainer>
          <HeaderSteps step={2} />
          <HeaderText>
            Agora vamos coletar algumas informações do seu endereço.
          </HeaderText>
          <InputArea>
            <SignUpInput
              label="CEP"
              value={cepField}
              onChangeText={(text) => setCepField(text)}
            />
            <SignUpInput 
              label="Estado"
              value={estadoField}
              onChangeText={(text) => setEstadoField(text)}
            />
            <SignUpInput
              label="Cidade"
              value={cidadeField}
              onChangeText={(text) => setCidadeField(text)}
            />
            <SignUpInput
              label="Bairro"
              value={bairroField}
              onChangeText={(text) => setBairroField(text)}
            />
            <SignUpInput
              label="Endereço"
              value={enderecoField}
              onChangeText={(text) => setEnderecoField(text)}
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

export default SignUpSecondStep