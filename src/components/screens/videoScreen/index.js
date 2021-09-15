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
const VideScreen=({ navigation, route={} }) => {

    const [ isPause ,setisPause ] = useState(false) //To know video is paused or not. If video is paused then reponse option will display.

    //this function is to navigate to video recording screen
    const navigateTo = (screen) => {
        if(screen===ScreenNames.VIDEOREORDING)
            navigation.navigate(ScreenNames.VIDEOREORDING)
        if(screen===ScreenNames.AUDIORECORDING)
            navigation.navigate(ScreenNames.AUDIORECORDING)
        if(screen===ScreenNames.TEXTFORMAT)
            navigation.navigate(ScreenNames.TEXTFORMAT)
    }

    //This function will set isPause flag. if flag is true then response controls will enable.
    const isPauseHandler = () =>{
        setisPause(!isPause)
    }

    const { params } = route;
    const { path=null } = params;
    return (
        <LinearGradient colors={['#fdfcfb', '#e2d1c3', '#e2d1c3']} style={styles.container}>       
                <View style={styles.container}>
                <VideoPlayer 
                    navigation={ navigation }
                    isPause={isPause}
                    URL={path ? {uri :path} : require("./../../../assets/video.mp4")}  
                    videoPaused={ isPauseHandler}
                />
            {isPause && path===null ? <Animated.View animation="fadeInUpBig" style={styles.animateButton}>
                <TouchableOpacity onPress={()=> navigateTo(ScreenNames.VIDEOREORDING)} style={styles.animatedView}>
                <Image style={styles.resIcon} source={require("./../../../assets/videorecord.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigateTo(ScreenNames.AUDIORECORDING)} style={styles.animatedView}>
                <Image style={styles.resIcon} source={require("./../../../assets/microphone.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigateTo(ScreenNames.TEXTFORMAT)} style={styles.animatedView}>
                <Image style={styles.resIcon} source={require("./../../../assets/keyboard.png")} />
                </TouchableOpacity>
            </Animated.View> : null}
                </View>
        </LinearGradient>
    );
}


export default VideScreen;