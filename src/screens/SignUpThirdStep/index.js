import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  Container,
  Scroller,
  ScrollerContainer,
  InputArea,
  HeaderText
} from './styles'

import HeaderSteps from '../../components/HeaderSteps'
import SignUpInput from '../../components/SignUpInput'
import LineButton from '../../components/LineButton'
import SignButton from '../../components/SignButton'

const SingUpThirdStep = () => {
  const navigation = useNavigation()

  const [modeloField, setModeloField] = useState('')
  const [marcaField, setMarcaField] = useState('')
  const [anoField, setAnoField] = useState('')
  const [capacidadeField, setCapacidadeField] = useState('')
  const [categoriaField, setCategoriaField] = useState('')
  const [placaField, setPlacaField] = useState('') 
  const [carroceriaField, setCarroceriaField] = useState('')
  const [AnttField, setAnttField] = useState('')

  const handleVoltar = () => {
    navigation.navigate('SignUpSecondStep')
  }

  const handleProximo = () => {

  }

  return (
    <Container>
      <Scroller>
        <ScrollerContainer>
          <HeaderSteps step={3} />
          <HeaderText>
            Agora, nos informe um pouco mais sobre seu veículo.
          </HeaderText>
          <InputArea>
            <SignUpInput 
              label="Modelo"
              value={modeloField}
              onChangeText={(text) => setModeloField(text)}
            />
            <SignUpInput
              label="Marca"
              value={marcaField}
              onChangeText={(text) => setMarcaField(text)}
            />
            <SignUpInput
              label="Ano"
              value={anoField}
              onChangeText={(text) => setAnoField(text)}
            />
            <SignUpInput
              label="Capacidade Máxima (toneladas)"
              value={capacidadeField}
              onChangeText={(text) => setCapacidadeField(text)}
            />
            <SignUpInput
              label="Categoria do veículo"
              value={categoriaField}
              onChangeText={(text) => setCategoriaField(text)}
            />
            <SignUpInput
              label="Placa"
              value={placaField}
              onChangeText={(text) => setPlacaField(text)}
            />
            <SignUpInput
              label="Tipo de carroceria"
              value={carroceriaField}
              onChangeText={(text) => setCarroceriaField(text)}
            />
            <SignUpInput
              label="ANTT"
              value={AnttField}
              onChangeText={(text) => setAnttField(text)}
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
            Finalizar Cadastro
          </SignButton>
        </ScrollerContainer>
      </Scroller>
    </Container>
  )
}

export default SingUpThirdStep