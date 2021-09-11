import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {RNCamera} from 'react-native-camera'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as Animated from 'react-native-animatable';
import { saveResponse } from './../../../../utils/commonMethods'
import { Header } from './../../../commoncomponents'

function VideoRecorder(props) {

    const [ isRecording, setIsRecording ] = useState(false);
    const [ frontCam, setFrontCam ] = useState(false);
    let camera = useRef(null);


    startRecording=async()=>{
        if (camera) {
            try {
                const options = {
                    quality: 0.5,
                    videoBitrate: 8000000,
                    maxDuration: 600
                };
                const promise = camera.recordAsync(options);
                if (promise) {
                    setIsRecording(true)
                    const data = await promise;
                    saveResponse(data.uri, "video")
                    setIsRecording(false)
                }
            } catch (error) {
                console.log(error);
            }
          }
    }

    stopRecording=async()=>{
        await camera.stopRecording();
    }


    return (
        <View
                style={styles.container}
            > 
                <RNCamera
                    captureAudio={true}
                    type={ !frontCam ? RNCamera.Constants.Type.back : RNCamera.Constants.Type.front}
                    defaultVideoQuality={RNCamera.Constants.VideoQuality["480p"]}
                        ref={(cam) => {
                        camera = cam;
                    }}
                    style={styles.container}
                    captureAudio={true}
                >
                    <>
                    <Header onClick ={()=> props.navigation.goBack(null)} />
                    {isRecording ? <Animated.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.recordingLabel}>Recording</Animated.Text> : null}
                    <View style={styles.controls}>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.button}
                            onPressIn={()=> startRecording()}
                            onPressOut={()=>stopRecording()}
                        >
                        {isRecording ? <Image style={styles.image} source={require("./../../../../assets/stop.png")} /> 
                        : <Image style={styles.image} source={require("./../../../../assets/record.png")} />}
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={()=> setFrontCam(!frontCam)} style={styles.cameraSwitch}>
                        <Image style={styles.cameraturn} source={require("./../../../../assets/cameraswitch.png")} /> 
                    </TouchableOpacity>
                    </>
                </RNCamera>
            </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      recordingLabel:{
        color: 'red',
        fontSize: wp("5"),
        fontWeight:'bold',
        textAlign:'center'
      },
      button:{
        width: wp("20"),
        height: wp("20"),
        justifyContent:'center',
        alignItems:'center',
        borderRadius: wp("20")/2,
        borderWidth:wp("1"),
        borderColor:'white'
      },
      controls:{
        flexDirection: 'row',
        width: '100%',
        justifyContent:'center',
        position: 'absolute',
        bottom:hp("5")
      },
      image:{
          width: wp("15"),
          height: wp("15")
      },
      cameraSwitch:{
          position:'absolute',
          bottom: hp("8"),
          right: wp("8")
      },
      cameraturn:{
        width: wp("10"),
        height: wp("10")
      }
});

export default VideoRecorder;