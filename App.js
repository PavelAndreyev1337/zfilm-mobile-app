import React from 'react';
import { Container } from 'native-base';
import SearchForm from './components/SearchForm'
import Header from './components/Header'

export default function App() {
  return (
    <Container>
      <Header/>
      <SearchForm/>
    </Container>
  );
}