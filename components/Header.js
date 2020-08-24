import React from 'react'
import { Header, Left, Button, Icon, Body, Title, Right,Thumbnail } from 'native-base'
import popcornIcon from '../assets/popcorn-icon.png'

const AppHeader = ({isMain, onTransition}) => {

    function handlePress(){
        onTransition.fetchData()
    }

    return (
        <Header>
            { !isMain &&
                <Left>
                    <Button onPress={handlePress} transparent>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
            }
            <Body style={{flexDirection:'row'}}>
                <Thumbnail square style={{marginRight: 8}} small source={popcornIcon}/>
                <Title style={{alignSelf:"center"}}>ZFilm</Title>
            </Body>
            <Right/>
        </Header>
    )
}

export default AppHeader