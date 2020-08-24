import React from 'react'
import { Header, Left, Button, Icon, Body, Title, Right } from 'native-base'
import scraper from '../scraper'

const AppHeader = ({isMain, onTransition}) => {

    function handlePress(){
        onTransition.fetchData()
    }

    return (
        <Header>
            { !isMain &&
                <Left>
                    <Button transparent>
                        <Icon onPress={handlePress} name="arrow-back" />
                    </Button>
                </Left>
            }
            <Body>
                <Title>ZFilm</Title>
            </Body>
            <Right/>
        </Header>
    )
}

export default AppHeader