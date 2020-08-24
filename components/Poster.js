import React, {useState} from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Card, CardItem, Icon, Body, Badge, H1, H3 } from 'native-base'
import scraper from '../scraper'
import {WebView} from 'react-native-webview'

const Poster = ({name}) => {
    const [videoPlayersUrls, setVideoPlayersUrls] = useState([])
    const [titleColor, setTitleColor] = useState('black')

    async function handlePress () {
        if (videoPlayersUrls.length > 0){
            setVideoPlayersUrls([])
            setTitleColor('black')
        } else{
            let videoPlayersUrls=await scraper.scrapeVideoPlayersUrls(name.url)
            setVideoPlayersUrls(videoPlayersUrls)
            setTitleColor('red')
        }
    }

    return (
        <View>
        <Card style={{marginTop: 30}}>
            <CardItem style={styles.cardItemSize} cardBody>
                <Image resizeMode="contain" style={styles.resizableImage} source={{ uri: name.imgUrl }} />
                    <View style={{ flex: 1, height:styles.cardItemSize.height, alignSelf:'flex-start', flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column', justifyContent:'space-between'}}>
                            <Badge style={styles.whiteBadge}>
                                <H3 style={{color:'#de5d62', margin: 5, fontWeight: 'bold'}}>{name.voice}</H3>
                            </Badge>
                            <View>
                                { name.imdb !== '' &&
                                    <Badge style={styles.whiteBadge}>
                                        <Icon name="star">
                                            <H3>{name.imdb}</H3>
                                        </Icon>
                                    </Badge>
                                }
                                { name.kp !== '' &&
                                    <Badge style={styles.whiteBadge}>
                                        <Icon name="star">
                                            <H3>{name.kp}</H3>
                                        </Icon>
                                    </Badge>
                                }
                            </View>
                        </View>
                        <View style={{margin: 5, alignSelf:'flex-end'}}>
                            <Badge danger>
                                <H3  style={{color: 'white',margin: 5, fontWeight: 'bold'}}>{name.year}</H3>
                            </Badge>
                        </View>
                    </View>
            </CardItem>
            <CardItem header bordered>
                <Body>
                    <H1 style={{alignSelf:"center", color: titleColor}} onPress={handlePress}>{name.title}</H1>
                </Body>
            </CardItem>
        </Card>
        { videoPlayersUrls.length > 0 &&
            <WebView  
                originWhitelist={['*']} 
                allowsFullscreenVideo={true}
                style={{width:'100%',height:300}} 
                source={{uri: videoPlayersUrls[0] }}/>
        }
        </View>
    )
}

const styles = StyleSheet.create({
    whiteBadge: {
        backgroundColor:'white',
        margin: 5
    },
    cardItemSize: {
        height: 600
    },
    resizableImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
})

export default Poster
