import React from 'react'
import SearchForm from '../components/SearchForm'
import Poster from '../components/Poster'
import { Container, Content } from 'native-base'


const Films = () => {
    return (
        <Container>
            <SearchForm/>
            <Content>
                <Poster/>
                <Poster/>
                <Poster/>
            </Content>
        </Container>
    )
}

export default Films