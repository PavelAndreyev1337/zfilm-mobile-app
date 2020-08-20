import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Card, CardItem, Icon, Body, Badge, H1, H3 } from 'native-base'

const Poster = () => {
    return (
        <Card style={{marginTop: 30}}>
            <CardItem style={styles.cardItemSize} cardBody>
                <Image resizeMode="contain" style={styles.resizableImage} source={{ uri: 'https://img-24x7.com/uploads/ff/m/635772.jpg' }} />
                    <View style={{ flex: 1, height:styles.cardItemSize.height, alignSelf:'flex-start', flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column', justifyContent:'space-between'}}>
                            <Badge style={styles.whiteBadge}>
                                <H3 style={{color:'#de5d62', margin: 5, fontWeight: 'bold'}}>Русские субтитры</H3>
                            </Badge>
                            <View>
                                <Badge style={styles.whiteBadge}>
                                    <Icon name="star">
                                        <H3>&nbsp;IMDb:&nbsp;8</H3>
                                    </Icon>
                                </Badge>
                                <Badge style={styles.whiteBadge}>
                                    <Icon name="star">
                                        <H3>&nbsp;КП:&nbsp;7.618</H3>
                                    </Icon>
                                </Badge>
                            </View>
                        </View>
                        <View style={{margin: 5, alignSelf:'flex-end'}}>
                            <Badge danger>
                                <H3  style={{color: 'white',margin: 5, fontWeight: 'bold'}}>2014</H3>
                            </Badge>
                        </View>
                    </View>
            </CardItem>
            <CardItem header bordered>
                <Body>
                    <H1 style={{alignSelf:"center"}}>Игра в имитацию</H1>
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
