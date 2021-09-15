import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native'
import moment from 'moment'
import LinearGradient from 'react-native-linear-gradient';
import {useRoute, useNavigation } from '@react-navigation/native';
import { Header } from './../../commoncomponents'
import styles from './styles'
import { ScreenNames } from '../../../utils';

/*
    This component is to display the list of responses.
*/
const ResponseList= (props) => {
    const route = useRoute();
    let { params={} } = route;
    const navigation = useNavigation();
    const [list, setList ] = useState(params.data)
    const [text, setText ] = useState("")

    //This is function is to navigate to different screen
    const navigate=(type, path)=>{
        
    }

    //This function is to render the list of responses
    const renderItems=({item, index})=>{
        let formattedDate = moment(item.date).format("DD MMM, YYYY, hh:mm A")
        return(
            <TouchableOpacity activeOpacity={0.7} onPress={()=> navigate(item.type, item.text? item.text : item.path )} style={styles.itemContainer}>
                <Text style={styles.datetext}>{formattedDate}</Text>
                <>
                {item.type==="video" ? <Image style={styles.image} source={require("./../../../assets/videogreen.png")} />
                  : item.type==="audio" ? <Image style={styles.image} source={require("./../../../assets/micgreen.png")} /> 
                  : null}
                </>
                { item.type==="text" ? <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>{item.text}</Text> : null }            
            </TouchableOpacity>
        )
    }

    return (
        <LinearGradient colors={['#fdfcfb', '#e2d1c3', '#e2d1c3']} style={styles.container}>
            <Header />
            <View style={styles.container}>
                {list.length ? <FlatList
                    data={list}
                    renderItem={ renderItems }
                /> : <Text style={styles.emptyText}>No responses</Text>}
            </View>
        </LinearGradient>
    )
}

export default ResponseList;