import React from 'react'
import styled from 'styled-components/native'

const Container = styled.TouchableOpacity`
  background-color: #fff;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  border-top-width: 0;
  border-left-width: 0;
`

const LeftSide = styled.View`

`

const ContentTexto = styled.View`
  margin-bottom: 8px;
`

const TextoPrincipal = styled.Text`
  font-weight: bold;
  margin-bottom: 4px;
`

const ContentInfo = styled.View`
  flex-direction: row;
`

const ProdutoText = styled.Text`
  margin-right: 10px;
`

const ProdutoTextBold = styled.Text`
  font-weight: bold;
`

const ValorText = styled.Text`

`

const ValorTextBold = styled.Text`
  font-weight: bold;
`

const RightSide = styled.View`

`

const ButtonVisualizar = styled.View`

`

const ButtonText = styled.Text`
  
`

const FreteBox = ({ produto }) => {
  return (
    <Container>
      <LeftSide>
        <ContentTexto>
          <TextoPrincipal>
            De: Cachoeiro de Itapemirim / ES
          </TextoPrincipal>
          <TextoPrincipal>
            Para: Belo Horizonte / MG
          </TextoPrincipal>
        </ContentTexto>
        <ContentInfo>
          <ProdutoText>
            <ProdutoTextBold>
              Produto:
            </ProdutoTextBold>
            { " " + produto }
          </ProdutoText>
          <ValorText>
            <ValorTextBold>
              Valor: 
            </ValorTextBold>
            {" "} R$ 2.800,00
          </ValorText>
        </ContentInfo>
      </LeftSide>
      <RightSide>
        <ButtonVisualizar>
          <ButtonText>
            Visualizar
          </ButtonText>
        </ButtonVisualizar>
      </RightSide>
    </Container>
  )
}

export default FreteBox