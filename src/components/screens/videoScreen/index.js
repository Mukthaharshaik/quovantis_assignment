import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native'
import { VideoPlayer } from './../../commoncomponents'
import LinearGradient from 'react-native-linear-gradient';
import * as Animated from 'react-native-animatable'
import styles from './styles'
import { ScreenNames } from './../../../utils'


/*
   Video Playing functionality Screen
*/
function VideScreen({ navigation, route={} }) {

    const [ isPause ,setisPause ] = useState(false) //To know video is paused or not. If video is paused then reponse option will display.

    //this function is to navigate to video recording screen
    const navigateTo = () =>{
        navigation.navigate(ScreenNames.VIDEOREORDING)
    }

    const { path=null } = route;
    return (
        <LinearGradient colors={['#fdfcfb', '#e2d1c3', '#e2d1c3']} style={styles.container}>       
                <View style={styles.container}>
                <VideoPlayer 
                    navigation={ navigation }ß
                    isPause={isPause}
                    URL={path ? {uri :path} : require("./../../../assets/video.mp4")}  
                    videoPaused={()=>  setisPause(!isPause)}
                />
            {isPause && path===null ? <Animated.View animation="fadeInUpBig" style={styles.animateButton}>
                <TouchableOpacity onPress={navigateTo} style={styles.animatedView}>
                <Image style={styles.resIcon} source={require("./../../../assets/videorecord.png")} />
                </TouchableOpacity>
            </Animated.View> : null}
                </View>
        </LinearGradient>
    );
}


export default VideScreen;