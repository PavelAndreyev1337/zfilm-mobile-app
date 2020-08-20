import React from 'react'
import { Header, Left, Button, Icon, Body, Title, Right } from 'native-base'

const AppHeader = () => {
    return (
        <Header>
            <Left>
                <Button transparent>
                    <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body>
                <Title>ZFilm</Title>
            </Body>
            <Right/>
        </Header>
    )
}

export default AppHeader