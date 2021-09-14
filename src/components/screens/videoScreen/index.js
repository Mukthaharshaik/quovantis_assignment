import React, { useState } from 'react';
import { View } from 'react-native'
import { VideoPlayer } from './../../commoncomponents'
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'


/*
   Video Playing functionality Screen
*/
function VideScreen({ navigation, route={} }) {

    const [ isPause ,setisPause ] = useState(false) //To know video is paused or not. If video is paused then reponse option will display.


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
                </View>
        </LinearGradient>
    );
}


export default VideScreen;