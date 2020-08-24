import React, { useState } from 'react'
import { Container } from 'native-base'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import Films from './screens/Films'
import { AppLoading } from 'expo'

const fetchFonts = () => {
  return Font.loadAsync({
    Robot: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={err => console.log(err)} />
    )
  }

  return (
    <Container>
      <Films />
    </Container>
  );
}