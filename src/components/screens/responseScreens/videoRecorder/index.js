import React, { useRef, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native'
import {RNCamera} from 'react-native-camera'
import * as Animated from 'react-native-animatable';
import { saveResponse, VIDEO } from './../../../../utils'
import { Header } from './../../../commoncomponents'
import styles from './styles'
import { videoRecordOptions as options } from './../../../../utils/constants'
import { logger } from '../../../../utils';

function VideoRecorder(props) {

    const [ isRecording, setIsRecording ] = useState(false);
    const [ frontCam, setFrontCam ] = useState(false);
    let camera = useRef(null);


    //Start the video recording
    const startRecording=async()=>{
        if (camera) {
            try {
                setIsRecording(true)
                const data = await camera.recordAsync(options);;
                saveResponse(data.uri, VIDEO)
                setIsRecording(false)
            } catch (error) {
                logger.log(error)
            }
          }
    }

    //Stop the video recording
    const stopRecording=async()=>{
        await camera.stopRecording();
    }

    //Switch camera front to back and back to front
    const switchCamera = () =>{
        setFrontCam(!frontCam)
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
                    <Header />
                    {isRecording ? <Animated.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.recordingLabel}>Recording</Animated.Text> : null}
                    <View style={styles.controls}>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.button}
                            onPressIn={ startRecording }
                            onPressOut={ stopRecording}
                        >
                        {isRecording ? <Image style={styles.image} source={require("./../../../../assets/stop.png")} /> 
                        : <Image style={styles.image} source={require("./../../../../assets/record.png")} />}
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={ switchCamera } style={styles.cameraSwitch}>
                        <Image style={styles.cameraturn} source={require("./../../../../assets/cameraswitch.png")} /> 
                    </TouchableOpacity>
                    </>
                </RNCamera>
            </View>
    );
}


export default VideoRecorder;