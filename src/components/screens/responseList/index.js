import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native'
import moment from 'moment'
import LinearGradient from 'react-native-linear-gradient';
import {useRoute, useNavigation } from '@react-navigation/native';
import { Header } from './../../commoncomponents'
import styles from './styles'


const ResponseList= (props) => {
    const route = useRoute();
    let { params={} } = route;
    const navigation = useNavigation();
    const [list, setList ] = useState(params.data)
    const [modalVisible, setModalVisible ] = useState(false)
    const [text, setText ] = useState("")

    const navigate=(type, path)=>{
        console.log("aaaaaaaaaa :", path)
        if(type==="video"){
            navigation.navigate('videoScreen', {
                path
            });
        }else if(type==="audio"){
            navigation.navigate('playRecord', {
                path
            });
        }else{
            setText(path)
            setModalVisible(true)
        }
    }
    renderItems=({item, index})=>{
        return(
            <SafeAreaView>   
            <TouchableOpacity activeOpacity={0.7} onPress={()=> navigate(item.type, item.text? item.text : item.path )} style={styles.itemContainer}>
                <Text style={styles.datetext}>{moment(item.date).format("DD MMM, YYYY, hh:mm A")}</Text>
                <>
                {item.type==="video" ? <Image style={styles.image} source={require("./../../../assets/videogreen.png")} />
                  : item.type==="audio" ? <Image style={styles.image} source={require("./../../../assets/micgreen.png")} /> 
                  : null}
                </>
                { item.type==="text" ? <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>{item.text}</Text> : null }            
            </TouchableOpacity>
            </SafeAreaView>
        )
    }

    return (
        <LinearGradient colors={['#fdfcfb', '#e2d1c3', '#e2d1c3']} style={{flex:1}}>
            <StatusBar hidden={true} />
            <Header onClick ={()=> navigation.goBack(null)} />
            <View style={styles.container}>
                {list.length ? <FlatList
                    data={list}
                    renderItem={(data)=>renderItems(data)}
                /> : <Text style={styles.emptyText}>No responses</Text>}
            </View>
        </LinearGradient>
    )
}

export default ResponseList;