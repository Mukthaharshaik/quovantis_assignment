import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity, Image } from 'react-native'
import { VideoPlayer, Header } from './../../commoncomponents'
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as Animated from 'react-native-animatable'



function VideScreen({ navigation, route={} }) {

    const [ openControls ,setopenControls ] = useState(false)
    const [ isPause ,setisPause ] = useState(false)


    const { path=null } = route;
    return (
        <LinearGradient colors={['#fdfcfb', '#e2d1c3', '#e2d1c3']} style={{flex:1}}>
                <View style={styles.header}>
                    <Header onClick ={()=> navigation.goBack(null)} />
                </View>
                <View style={styles.container}>
                <TouchableHighlight
                    onPress={() =>  setopenControls(!openControls) }
                >
                <VideoPlayer 
                    isPause={isPause}
                    openControls={openControls} 
                    URL={path ? {uri :path} : require("./../../../assets/video.mp4")}  
                    videoPaused={()=>  setisPause(!isPause)}
                />
            </TouchableHighlight>
            {isPause && path===null ? <Animated.View animation="fadeInUpBig" style={styles.animateButton}>
                <TouchableOpacity onPress={()=> navigation.navigate("videoRecorder")} style={styles.animatedView}>
                <Image style={styles.resIcon} source={require("./../../../assets/videorecord.png")} />
                </TouchableOpacity>
                
            </Animated.View> : null}
                </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        position:'absolute',
        zIndex:1
    },
    backgroundVideo: {
        width: '100%',
        height: wp("60")
    },
    sliderControl:{
        flex:1,
        flexDirection:'row'
    },
    controls:{
        position:'absolute',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        width: '100%',
        height: wp("15"),
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    image:{
        width: wp("8"),
        height: wp("8")
    },
    animateButton:{
        position:'absolute',
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        bottom: hp("20")
    },
    resIcon:{
        width: wp("6"),
        height: wp("6")
    },
    animatedView:{
        width: wp("12"),
        height:wp("12"),
        marginRight: wp("2"),
        borderRadius: wp("12")/2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white',
        elevation:5
    }
})

export default VideScreen;