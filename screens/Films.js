import React, {useState, useEffect} from 'react'
import SearchForm from '../components/SearchForm'
import Poster from '../components/Poster'
import { Container, Content, Spinner } from 'native-base'
import  Scraper from '../scraper'

const Films = () => {
    const [data,setData] = useState(null)
    let scraper = new Scraper();

    useEffect(()=>{
        let data =  scraper.scrapeMainPage()
        setData(data)
    })

    return (
        <Container>
            <SearchForm />
            { data ?
                <Content>
                    <Poster />
                    <Poster />
                    <Poster />
                </Content> :
                <Spinner style={{flex:1, alignSelf:'center'}} color='blue'/>
            }
        </Container>
    )
}

export default Films