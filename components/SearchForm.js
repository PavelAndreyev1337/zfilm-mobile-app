import React, { useState } from 'react'
import { StyleSheet } from "react-native"
import { Input, Form, Item, Icon, Button,Text } from 'native-base'

const SearchForm = ({isMain, onSubmit }) => {
    const [search, onChangeSearch] = useState('')
    const [resultTitle, setResultTitlte]= useState('')

    async function handleSubmit(event) {
        if (search.replace(/\s+/g, '').length == 0) {
            onSubmit.fetchData()
            onChangeSearch('')
        } else {
            onSubmit.fetchData(`/search/${search}`)
        }
        setResultTitlte(`Результат поиска "${search}"`)
    }

    return (
        <Form>
            <Item style={styles.marginItem}>
                <Icon name="ios-search" />
                <Input
                    placeholder="Поиск фильмов и сериалов"
                    onSubmitEditing={handleSubmit}
                    onChangeText={text => onChangeSearch(text)}
                    value={search} />
                {  search.length > 0 &&  
                    <Button onPress={()=>{onChangeSearch('')}} transparent >
                        <Icon style={{color:'gray'}} name="ios-close" />
                    </Button>
                }
            </Item>
            {  !isMain && <Text style={{marginTop:2, marginLeft:15, paddingBottom: 10, fontWeight: "bold"}}>{resultTitle}</Text>}
        </Form>
    )
}

const styles = StyleSheet.create({
    marginItem: {
        margin: 5
    }
})

export default SearchForm