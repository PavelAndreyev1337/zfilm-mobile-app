import React, { useState, useEffect } from 'react'
import SearchForm from '../components/SearchForm'
import Poster from '../components/Poster'
import { Container, Content, Spinner } from 'native-base'
import Scraper from '../scraper'


const Films = () => {
    const [data, setData] = useState([])
    const scraper = new Scraper();

    useEffect(() => {
        async function fetchData(){
            await scraper.scrapePage()
            setData(scraper.data)
        }
        fetchData()
    },[])

    return (
        <Container>
            <SearchForm onSubmit = {setData}/>
            {data.length > 0 ?
                <Content>
                    {data.map((film, index) => (<Poster name={film} key={index}/>))}
                </Content> :
                <Spinner style={{ flex: 1, alignSelf: 'center' }} color='blue' />
            }
        </Container>
    )
}

export default Films