import React from 'react'
import { Header, Left, Button, Icon, Body } from 'native-base'

const AppHeader = () => {
    return (
        <Header>
            <Left>
                <Button transparent>
                    <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body>

            </Body>
        </Header>
    )
}

export default AppHeader