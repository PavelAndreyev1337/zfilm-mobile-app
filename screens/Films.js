import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import SearchForm from '../components/SearchForm'
import Poster from '../components/Poster'
import { Container, Content, Spinner,H3,View } from 'native-base'
import scraper from '../scraper'


const Films = () => {
    const [data, setData] = useState(null)
    const [isMain, setIsMain] = useState(true)

    async function fetchData(relativeUrl=null){
        setData(null)
        if (relativeUrl){
            setIsMain(false)
            setData(await scraper.scrapePage(relativeUrl))
        } else {
            setIsMain(true)
            setData(await scraper.scrapePage())
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    return (
        <Container>
            <Header isMain={isMain} onTransition={{fetchData}} />
            <SearchForm isMain={isMain} onSubmit = {{fetchData}}/>
            { isMain && <H3 style={{alignSelf:"center", marginBottom:5, marginTop:15, color:"gray", textDecorationLine:'underline'}}>НОВОЕ НА САЙТЕ</H3>}
            <Content>
            {data === null ?
                <View style={{flex:1,marginTop:170,justifyContent: 'center',alignItems:'center'}}>
                    <Spinner style={{flex:1, alignSelf:"center"}} color='gray'/>
                </View>:
                <View>
                    {data.map((film, index) => (<Poster name={film} key={index}/>))}
                </View>
            }
            </Content>
        </Container>
    )
}

export default Films