import React, {useState, useEffect} from 'react'
import { Container } from 'native-base'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import Header from './components/Header'
import Films from './screens/Films'

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
      <Films/>
    </Container>
  );
}