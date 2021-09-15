import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, StatusBar, TouchableOpacity, SafeAreaView, Modal } from 'react-native'
import moment from 'moment'
import LinearGradient from 'react-native-linear-gradient';
import {useRoute, useNavigation } from '@react-navigation/native';
import { Header, ModelContainer } from './../../commoncomponents'
import styles from './styles'
import { AUDIO, TEXT, VIDEO } from '../../../utils';

/*
    This component is to display the list of responses.
*/
const ResponseList= (props) => {
    const route = useRoute();
    let { params={} } = route;
    const navigation = useNavigation();
    const [list, setList ] = useState(params.data)
    const [text, setText ] = useState("")
    const [ modalVisible, setModalVisible] = useState(false)

    //This is function is to navigate to different screen
    const navigate=(type, path)=>{
        if(type===TEXT){
            setText(path)
            setModalVisible(true)
        }
    }

    const closeModal = () =>{
        setModalVisible(false)
    }

    //This function is to render the list of responses
    const renderItems=({item, index})=>{
        let formattedDate = moment(item.date).format("DD MMM, YYYY, hh:mm A")
        return(
            <TouchableOpacity activeOpacity={0.7} onPress={()=> navigate(item.type, item.text? item.text : item.path )} style={styles.itemContainer}>
                <Text style={styles.datetext}>{formattedDate}</Text>
                <>
                {item.type===VIDEO ? <Image style={styles.image} source={require("./../../../assets/videogreen.png")} />
                  : item.type===AUDIO ? <Image style={styles.image} source={require("./../../../assets/micgreen.png")} /> 
                  : null}
                </>
                { item.type===TEXT ? <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>{item.text}</Text> : null }            
            </TouchableOpacity>
        )
    }

    return (
        <LinearGradient colors={['#fdfcfb', '#e2d1c3', '#e2d1c3']} style={styles.container}>
            <Header />
            <ModelContainer visible={modalVisible} text={text} onClose={ closeModal } />
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