import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Card, CardItem, Icon, Body, Badge, H1, H3 } from 'native-base'

const Poster = ({name}) => {
    const kp = name.kp
    const imdb= name.imdb
    return (
        <Card style={{marginTop: 30}}>
            <CardItem style={styles.cardItemSize} cardBody>
                <Image resizeMode="contain" style={styles.resizableImage} source={{ uri: name.imgUrl }} />
                    <View style={{ flex: 1, height:styles.cardItemSize.height, alignSelf:'flex-start', flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column', justifyContent:'space-between'}}>
                            <Badge style={styles.whiteBadge}>
                                <H3 style={{color:'#de5d62', margin: 5, fontWeight: 'bold'}}>{name.voice}</H3>
                            </Badge>
                            <View>
                                { imdb !== '' &&
                                    <Badge style={styles.whiteBadge}>
                                        <Icon name="star">
                                            <H3>{name.imdb}</H3>
                                        </Icon>
                                    </Badge>
                                }
                                { kp !== '' &&
                                    <Badge style={styles.whiteBadge}>
                                        <Icon name="star">
                                            <H3>{kp}</H3>
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
                    <H1 style={{alignSelf:"center"}}>{name.title}</H1>
                </Body>
            </CardItem>
        </Card>
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
