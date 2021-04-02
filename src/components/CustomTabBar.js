import React from 'react'
import styled from 'styled-components/native'
 
import PrincipalIcon from '../assets/menu/principal.svg'
import PrincipalIconActive from '../assets/menu/principal-active.svg'
import FretesIcon from '../assets/menu/fretes.svg'
import FretesIconActive from '../assets/menu/fretes-active.svg'
import PerfilIcon from '../assets/menu/perfil.svg'
import PerfilIconActive from '../assets/menu/perfil-active.svg'
import OpcoesIcon from '../assets/menu/opcoes.svg'
import OpcoesIconActive from '../assets/menu/opcoes-active.svg'

const TabArea = styled.View` 
  height: 60px;
  background-color: #FFFFFF;
  flex-direction: row;
  align-items: center;
`

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const IconTitle = styled.Text`
  margin-top: 5px;
  font-size: 12px;
`

const CustomTabBar = ({ state, navigation }) => {

  const goTo = (screenName) => {
    navigation.navigate(screenName)
  }
  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        {
          state.index === 0 ? <PrincipalIconActive width="20" height="20" /> : <PrincipalIcon width="20" height="20" />
        }
        <IconTitle style={{color: state.index === 0 ? '#FFA037' : '#444a5c'}}>
          Home
        </IconTitle>
      </TabItem>
      <TabItem onPress={() => goTo('Fretes')}>
        {
          state.index === 1 || state.index === 4 ? <FretesIconActive width="20" height="20" /> : <FretesIcon width="20" height="20" />
        }
        <IconTitle style={{color: state.index === 1 || state.index === 4 ? '#FFA037' : '#444a5c'}}>
          Fretes
        </IconTitle>
      </TabItem>
      <TabItem onPress={() => goTo('Perfil')}>
        {
          state.index === 2 ? <PerfilIconActive width="20" height="20" /> : <PerfilIcon width="20" height="20" />
        }
        <IconTitle style={{color: state.index === 2 ? '#FFA037' : '#444a5c'}}>
          Perfil
        </IconTitle>
      </TabItem>
      <TabItem onPress={() => goTo('Opcoes')}>
        {
          state.index === 3 ? <OpcoesIconActive width="20" height="20" /> : <OpcoesIcon width="20" height="20" />
        }
        <IconTitle style={{color: state.index === 3 ? '#FFA037' : '#444a5c'}}>
          Opções
        </IconTitle>
      </TabItem>
    </TabArea>
  )
}

export default CustomTabBar