import React from 'react'
import {
  Container,
  Scroller,
  FreteInfo,
  BoxFreteInfo,
  BoxIcon,
  RideLine,
  ContentInfo,
  Title,
  Subtitle,
  Separator,
  CruzBox,
  TracoHorizontal,
  TracoVertical,
  HorizontalLine,
  CargaInfo,
  BoxCargaInfo,
  CargaInfoTitle,
  CargaInfoSubtitle,
  ObservacaoView,
  ObservacaoTitle,
  ObservacaoField,
  ContentButton,
  Button,
  ButtonText
} from './styles'

import HeaderUsuario from '../../components/HeaderUsuario'

import DestinoIcon from '../../assets/frete-info/destino.svg'
import OrigemIcon from '../../assets/frete-info/origem.svg'
import TaxaIcon from '../../assets/frete-info/taxa.svg'
import ValorIcon from '../../assets/frete-info/valor.svg'

const VisualizarFrete = ({ route, navigation }) => {
  const { id } = route.params
  return (
    <Container>
      <HeaderUsuario
        voltar={true}
        handleVoltar={() => navigation.goBack()}
      >
        FRETE
      </HeaderUsuario>
      <Scroller>
        <FreteInfo>
          <BoxFreteInfo>
            <BoxIcon>
              <OrigemIcon width="30" height="30" />
              <RideLine />
            </BoxIcon>
            <ContentInfo>
              <Title>
                Origem
              </Title>
              <Subtitle>
                Cachoeiro de Itapemirim / ES
              </Subtitle>
            </ContentInfo>
          </BoxFreteInfo>
          <BoxFreteInfo>
            <BoxIcon>
              <DestinoIcon width="30" height="30" />
              <RideLine />
            </BoxIcon>
            <ContentInfo>
              <Title>
                Destino
              </Title>
              <Subtitle>
                Belo Horizonte / MG
              </Subtitle>
            </ContentInfo>
          </BoxFreteInfo>
          <BoxFreteInfo>
            <BoxIcon>
              <ValorIcon width="34" height="34" />
              <RideLine />
            </BoxIcon>
            <ContentInfo>
              <Title>
                Valor do Frete
              </Title>
              <Subtitle>
                R$ 25.000,00
              </Subtitle>
            </ContentInfo>
          </BoxFreteInfo>
          <BoxFreteInfo>
            <BoxIcon>
              <TaxaIcon width="26" height="26" />
            </BoxIcon>
            <ContentInfo>
              <Title>
                Taxa de Agenciamento
              </Title>
              <Subtitle>
                R$ 110,00
              </Subtitle>
            </ContentInfo>
          </BoxFreteInfo>
        </FreteInfo>
        <Separator>
          <CruzBox>
            <TracoHorizontal />
            <TracoVertical />
          </CruzBox>
          <HorizontalLine/>
        </Separator>
        <CargaInfo>
          <BoxCargaInfo>
            <CargaInfoTitle>
              Tipo do veículo
            </CargaInfoTitle>
            <CargaInfoSubtitle>
              Truck
            </CargaInfoSubtitle>
          </BoxCargaInfo>
          <BoxCargaInfo>
            <CargaInfoTitle>
              Código do frete
            </CargaInfoTitle>
            <CargaInfoSubtitle>
              PBXPB422
            </CargaInfoSubtitle>
          </BoxCargaInfo>
          <BoxCargaInfo>
            <CargaInfoTitle>
              Carroceria
            </CargaInfoTitle>
            <CargaInfoSubtitle>
              Graneleiro Grade Baixa
            </CargaInfoSubtitle>
          </BoxCargaInfo>
          <BoxCargaInfo>
            <CargaInfoTitle>
              Tipo da carga
            </CargaInfoTitle>
            <CargaInfoSubtitle>
              Granito
            </CargaInfoSubtitle>
          </BoxCargaInfo>
          <BoxCargaInfo>
            <CargaInfoTitle>
              Peso da carga 
            </CargaInfoTitle>
            <CargaInfoSubtitle>
              Truck
            </CargaInfoSubtitle>
          </BoxCargaInfo>
        </CargaInfo>
        <ObservacaoView>
          <ObservacaoTitle>
            Observações
          </ObservacaoTitle>
          <ObservacaoField>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula ornare ligula, eu blandit erat vehicula a. Vestibulum et est dictum ipsum finibus 
            sollicitudin. Pellentesque placerat erat non placerat laoreet.
          </ObservacaoField>
        </ObservacaoView>
        <ContentButton>
          <Button>
            <ButtonText>
              Solicitar Frete
            </ButtonText>
          </Button>
        </ContentButton>
      </Scroller>
    </Container>
  )
}

export default VisualizarFrete