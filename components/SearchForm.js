import React, {useState} from 'react'
import { StyleSheet } from "react-native"
import { Input, Form, Item, Icon } from 'native-base'
import Scraper from '../scraper'

const SearchForm = ({onSubmit}) => {
    const [search,onChangeSearch]=useState('')
    const scraper = new Scraper()

    async function handleSubmit(event){
        onSubmit([])
        await scraper.scrapePage(`/search/${search}`)
        onSubmit(scraper.data)
    }

    return (
        <Form>
            <Item style={styles.marginItem}>
                <Icon name="ios-search" />
                <Input 
                    placeholder="Поиск фильмов и сериалов" 
                    onSubmitEditing={handleSubmit} 
                    onChangeText={text => onChangeSearch(text)} 
                    value={search}/>
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