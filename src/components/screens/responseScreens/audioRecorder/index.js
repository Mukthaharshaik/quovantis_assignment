import React, { useState, useEffect } from 'react';
import { Text, View, PermissionsAndroid, TouchableOpacity, Platform } from 'react-native'
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import * as Animated from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { saveResponse } from './../../../../utils/commonMethods'
import { Header } from './../../../commoncomponents'
import styles from './styles'
import logger from './../../../../utils/logger'
import {shrinkAndGrowAnimation as pulse } from './../../../../utils/constants'


const audioRecorderPlayer = new AudioRecorderPlayer();

function AudioRecorder({navigation}) {

    const [isRecording, setIsRecording ] = useState(false);
    const [recordTime, setRecordTime ] = useState("00:00");

    //This function use to start audio record
    const onStartRecord= async ()=> {
        setIsRecording(true)
        await audioRecorderPlayer.startRecorder();
        audioRecorderPlayer.addRecordBackListener((e) => {
          let recordTime = audioRecorderPlayer.mmssss(
            Math.floor(e.currentPosition),
          );

          let sec = recordTime.toString().split(":")[1]
          let minutes = recordTime.toString().split(":")[0]
          setRecordTime(minutes+":"+sec)
          return;
        });
      };

      ////This function use to stop audio record
      const onStopRecord = async()=> {
        const result = await audioRecorderPlayer.stopRecorder();
        audioRecorderPlayer.removeRecordBackListener();
        setIsRecording(false)
        saveResponse(result,"audio");
      };

      //on mount the component it will ask for permissions in android
      useEffect(async()=>{
        if (Platform.OS === 'android') {
            try {
              const grants = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
              ]);
              if (
                grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
                  PermissionsAndroid.RESULTS.GRANTED &&
                grants['android.permission.READ_EXTERNAL_STORAGE'] ===
                  PermissionsAndroid.RESULTS.GRANTED &&
                grants['android.permission.RECORD_AUDIO'] ===
                  PermissionsAndroid.RESULTS.GRANTED
              ) {
                logger.log('Permissions granted');
              } else {
                logger.log('All required permissions not granted');
                return;
              }
            } catch (err) {
              return;
            }
          }
      },[])

    return (
        <LinearGradient colors={['#fdfcfb', '#e2d1c3', '#e2d1c3']} style={{flex:1}}>
            <Header />
                <View style={styles.container}>
                <Text style={styles.timer}>{recordTime}</Text>
                <View style={styles.flex50}>
                {isRecording ? <Animated.View
                    animation={pulse}
                    easing="ease-out"
                    iterationCount="infinite"
                    style={styles.animatedCircle}
                >
                </Animated.View> : <View style={styles.animatedCircle} />}
                </View>
                <View style={styles.flex50}>
                <TouchableOpacity
                            activeOpacity={1}
                            style={styles.button}
                            onPressIn={ onStartRecord }
                            onPressOut={ onStopRecord }
                        >
                        {!isRecording ? <View style={styles.startRecord} />
                        : <View style={{...styles.startRecord, backgroundColor: 'red'}} />}
                        </TouchableOpacity>
                </View>
                </View>
            </LinearGradient>
    );
}



export default AudioRecorder;