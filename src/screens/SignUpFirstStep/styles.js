import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #444A5C;
`

export const Scroller = styled.ScrollView`

`

export const ScrollerContainer = styled.View`
  padding: 20px;
`

export const HeaderSteps = styled.View`
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

export const InputArea = styled.View`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
`

export const HeaderText = styled.Text`
  color: #FFFFFF;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  margin-top: 40px;
`