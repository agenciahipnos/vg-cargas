import React from 'react'
import styled from 'styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 0 20px;
`

export const FreteInfo = styled.View`
  margin-top: 20px;
`

export const BoxFreteInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 26px;
`

export const BoxIcon = styled.View`
  position: relative;
  width: 50px;
  height: 50px;
  border: 1px solid #FFA03766;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`

export const RideLine = styled.View`
  position: absolute;
  bottom: -24px;
  border-radius: 2px;
  left: 50%;
  transform: translateX(-2px);
  height: 20px;
  width: 4px;
  background-color: #B1B1B166;
`

export const ContentInfo = styled.View`
  margin-left: 14px;
`

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 2px;
`

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #777;
`

export const Separator = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

export const CruzBox = styled.View`
  position: relative;
  height: 22px;
  width: 22px;
  margin-right: 20px;
`

export const TracoHorizontal = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-2px);
  height: 4px;
  background-color: #B1B1B180;
  border-radius: 1px;
`

export const TracoVertical = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-2px);
  width: 4px;
  background-color: #B1B1B180;
  border-radius: 1px;
`

export const HorizontalLine = styled.View`
  flex: 1;
  height: 3px;
  border-radius: 1px;
  background-color: #B1B1B180;
`

export const CargaInfo = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`

export const BoxCargaInfo = styled.View`
  width: 50%;
  margin-bottom: 20px;
  padding-right: 20px;
`

export const CargaInfoTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`

export const CargaInfoSubtitle = styled.Text`
  color: #777;
`

export const ObservacaoView = styled.View` 
  margin-bottom: 40px;
`

export const ObservacaoTitle = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bold;
`

export const ObservacaoField = styled.Text`
  border: 1px solid #B1B1B180;
  border-radius: 6px;
  color: #777;
  padding: 10px;
  line-height: 20px;
`

export const ContentButton = styled.View`
  align-items: center;
  margin-bottom: 50px;
`

export const Button = styled.TouchableOpacity`
  background-color: #FFA037;
  padding: 16px 24px;
  border-radius: 30px;
  width: 70%;
  align-items: center;
`

export const ButtonText = styled.Text`
  color: #FFFFFF;
  font-weight: bold;
  font-size: 18px;
`