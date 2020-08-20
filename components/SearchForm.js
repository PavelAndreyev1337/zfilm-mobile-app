import React from 'react'
import { StyleSheet } from "react-native"
import { Input, Form, Item, Icon } from 'native-base'

const SearchForm = () => {
    return (
        <Form>
            <Item style={styles.marginItem}>
                <Icon name="ios-search" />
                <Input placeholder="Поиск фильмов и сериалов" />
            </Item>
        </Form>
    )
}

const styles = StyleSheet.create({
    marginItem: {
        margin: 5
    }
})

export default SearchForm