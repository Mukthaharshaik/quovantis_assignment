import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Video from 'react-native-video';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



function VideoPlayer(props) {

    const [ totalDuration ,setTotalDuration ] = useState(0)
    const [ currentTime ,setCurrentTime ] = useState(0)
    let player = useRef(null)

    function onLoad(data){
        setTotalDuration(data.duration)
    }
    function onProgress(data){
        setCurrentTime(data.currentTime)
    }
    function forward(){
        if(currentTime+10<=totalDuration) player.seek(currentTime+10) 
    }
    function backword(){
        if(currentTime-10<=totalDuration) player.seek(currentTime-10) 
    }

    let { openControls, isPause, URL, videoPaused } = props;
    return (
        <View>
                <>
                <Video source={URL}
                    ref={(ref) => {
                        player = ref
                    }}
                    onLoad={(data)=> onLoad(data)}
                    paused={isPause}
                    fullscreen={true}              
                    resizeMode="stretch"
                    onProgress={onProgress.bind(this)}
                    style={styles.backgroundVideo} 
                    />
                    {openControls ? <TouchableOpacity activeOpacity={1} style={styles.controls}>
                        <TouchableOpacity onPress={()=> backword()}>
                            <Image style={{...styles.image, transform:[{ rotate: '180deg'}]}} source={require("./../../../assets/forward.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> videoPaused(!isPause)}>
                            <>
                                {!isPause ? <Image style={styles.image} source={require("./../../../assets/pause.png")} />
                                : <Image style={styles.image} source={require("./../../../assets/play.png")} />}
                            </>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> forward()}>
                            <Image style={styles.image} source={require("./../../../assets/forward.png")} />
                        </TouchableOpacity>
                    </TouchableOpacity> : null}
                </>
            </View>
    );
}



const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    backgroundVideo: {
        width: '100%',
        height: '100%'
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


export default VideoPlayer;