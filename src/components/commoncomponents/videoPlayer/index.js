import React, { useRef, useState } from 'react';
import { View, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import Video from 'react-native-video';
import * as Animatable from 'react-native-animatable'
import { Header } from './..'
import styles from './styles'
/*
    Video Player Component to play video based on URL which will come as a prop.
*/
function VideoPlayer(props) {

    const [ totalDuration ,setTotalDuration ] = useState(0) // Total video duration
    const [ currentTime ,setCurrentTime ] = useState(0)  // current video playing time
    const [ openControls ,setopenControls ] = useState(false) // Open control whever click on video.

    let player = useRef(null)

    //On video load. this method will call to capture the video length.
    const onLoad = (data) => {
        setTotalDuration(data.duration)
    }

    //While video running this function will call to get current video time.
    const onProgress = (data) => {
        setCurrentTime(data.currentTime)
    }

    //This function will check current video time is 10 sec greater than total video length. If true than it will backward the video.
    const forward = () => {
        if(currentTime+10<=totalDuration) player.seek(currentTime+10)
    }

    //This function will check current video time is 10 sec less than total video length. If true than it will backward the video.
    const backword = () => {
        if(currentTime-10<=totalDuration) player.seek(currentTime-10) 
    }

    //This function will set true or false flag to open and close video controls.
    const setControlsHandler = () =>{
        setopenControls(!openControls)
    }

    //This function will set true or false flag to pause and play the video.
    const videoPausedHandler = () =>{
        videoPaused(!isPause)
    }

    let { isPause, URL, videoPaused, navigation } = props;
    return (
        <View style={styles.container} >
            <TouchableHighlight onPress={ setControlsHandler }>
            <>
                <Video source={URL}
                    ref={(ref) => {
                        player = ref
                    }}
                    onLoad={ onLoad }
                    paused={isPause}
                    fullscreen={true}              
                    resizeMode="stretch"
                    onProgress={onProgress.bind(this)}
                    style={styles.backgroundVideo}
                    />
                   <>
                        <Animatable.View animation={openControls ? "slideOutDown" : "slideOutUp"} style={styles.topControls}>
                            <Header />
                        </Animatable.View>
                        <Animatable.View animation={!openControls ? "slideOutDown" : "slideOutUp"} style={styles.controls}>
                        <TouchableOpacity onPress={ backword }>
                            <Image style={{...styles.image, transform:[{ rotate: '180deg'}]}} source={require("./../../../assets/forward.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ videoPausedHandler }>
                            <>
                                {!isPause ? <Image style={styles.image} source={require("./../../../assets/pause.png")} />
                                : <Image style={styles.image} source={require("./../../../assets/play.png")} />}
                            </>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ forward }>
                            <Image style={styles.image} source={require("./../../../assets/forward.png")} />
                        </TouchableOpacity>
                    </Animatable.View> 
                    </>
                </>
            </TouchableHighlight>
             </View>
    );
}


export default VideoPlayer;