import React, {useState, useEffect} from 'react'
import { Container, Content } from 'native-base'
import SearchForm from './components/SearchForm'
import Header from './components/Header'
import Poster from './components/Poster'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  useEffect(()=>{
      Font.loadAsync({
      Robot: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    setIsReady(true)
  })
  
  return (
    <Container>
      <Header/>
      <SearchForm/>
      <Content>
          <Poster/>
          <Poster/>
          <Poster/>        
      </Content>
    </Container>
  );
}