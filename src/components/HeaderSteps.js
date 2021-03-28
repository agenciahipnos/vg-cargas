import React from 'react'
import styled from 'styled-components/native'

import Info from '../assets/info.svg'
import Localizacao from '../assets/localizacao.svg'
import LocalizacaoActive from '../assets/localizacao-active.svg'
import Veiculo from '../assets/veiculo.svg'
import VeiculoActive from '../assets/veiculo-active.svg'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const BoxIcon = styled.View`
  flex: 3;
  align-items: center;
`

export const IconText = styled.Text`
  text-align: center;
  margin-top: 6px;
  color: ${props => props.active ? '#FF953C' : '#FFFFFF'} ;
`

export const BoxStepLine = styled.View`
  flex: 2;
`

export const StepLine = styled.View`
  height: 5px;
  border-radius: 3px;
  background-color: ${props => props.active ? '#FF953C' : '#FFFFFF'} ;
  margin-top: 11px;
`

const HeaderSteps = ({ step }) => {
  return (
    <Container>
      <BoxIcon>
        <Info 
          width="30.85"
          height="27.56"
        />
        <IconText active={step === 1 || step === 2 || step === 3 ? true : false}>
          Informações básicas
        </IconText>
      </BoxIcon>
      <BoxStepLine>
        <StepLine active={step === 2 || step === 3 ? true : false} />
      </BoxStepLine>
      <BoxIcon>
        {
          step === 2 || step === 3 ?
          <LocalizacaoActive
            width="32.94"
            height="33"
          />
          :
          <Localizacao
            width="32.94"
            height="33"
          />
        }
        <IconText active={step === 2 || step === 3 ? true : false}>
          Localização
        </IconText>
      </BoxIcon>
      <BoxStepLine>
        <StepLine active={step === 3 ? true : false} />
      </BoxStepLine>
      <BoxIcon>
        {
          step == 3 ?
          <VeiculoActive
            width="37"
            height="37"
          />
          :
          <Veiculo 
            width="37"
            height="37"
          />
        }
        <IconText active={step === 3 ? true : false}>
          Veículo
        </IconText>
      </BoxIcon>
    </Container>
  )
}

export default HeaderSteps