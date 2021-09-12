import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment'
import { ModalContainer } from './../../commoncomponents'
import { Header } from './../../commoncomponents'
import {useRoute, useNavigation } from '@react-navigation/native';


const ResponseList=()=>{
    const route = useRoute();
    let { params={} } = route;
    const navigation = useNavigation();
    const [list, setList ] = useState(params.data)
    const [modalVisible, setModalVisible ] = useState(false)
    const [text, setText ] = useState("")


    const navigate=(type, path)=>{
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
                <ModalContainer visible={modalVisible} text={text} onClose={()=> setModalVisible(false)} />
                {list.length ? <FlatList
                    data={list}
                    renderItem={(data)=>renderItems(data)}
                /> : <Text style={styles.emptyText}>No responses</Text>}
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    itemContainer:{
        height:wp("20"),
        padding: wp("3"),
        backgroundColor:'white',
        margin: wp("2"),
        marginBottom:wp("0.5"),
        borderRadius:wp("1"),
        elevation: wp("5")
    },
    subitemContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    date:{
        margin:wp("1"),
        fontSize: wp("3.5")
    },
    image:{
        width: wp("8"),
        height: wp("8"),
        alignSelf: 'flex-end'
    },
    text:{
        fontSize: wp("3"),
        marginTop: wp("3")
    },
    datetext:{
        fontSize: wp("3"),
    },
    emptyText:{
        color: '#969595',
        fontSize: wp("5"),
        alignSelf:'center',
        fontStyle:'italic',
        marginTop: hp("15")
    }
});


export default ResponseList;