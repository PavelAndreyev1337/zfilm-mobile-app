import React from 'react'
import { StyleSheet } from "react-native"
import { Input, Container, Content, Form, Item, Button, Icon } from 'native-base'

const SearchForm = () => {
    return (
        <Container>
            <Content>
                <Form>
                    <Item style={styles.marginItem}>
                        <Input placeholder="Search..." />
                    </Item>
                    <Button style={styles.marginItem} block primary>
                        <Icon name="search"></Icon>
                    </Button>
                </Form>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    marginItem: {
        margin: 10
    }
})

export default SearchForm