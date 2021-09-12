import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, PermissionsAndroid, TouchableOpacity, Platform } from 'react-native'
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import * as Animated from 'react-native-animatable';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { saveResponse } from './../../../../utils/commonMethods'
import { Header } from './../../../commoncomponents'



const pulse = {
    0: {
      scale: 1,
    },
    0.5: {
      scale: 1.5
    },
    1: {
      scale: 1
    }
  }

  const audioRecorderPlayer = new AudioRecorderPlayer();

function AudioRecorder({navigation}) {

    const [isRecording, setIsRecording ] = useState(false);
    const [recordTime, setRecordTime ] = useState("00:00");

    async function onStartPlay(){
        setIsRecording(true)
        const result = await audioRecorderPlayer.startRecorder();
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

      async function onStopPlay (){
        const result = await audioRecorderPlayer.stopRecorder();
        audioRecorderPlayer.removeRecordBackListener();
        setIsRecording(false)
        saveResponse(result,"audio");
      };

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
                console.log('Permissions granted');
              } else {
                console.log('All required permissions not granted');
                return;
              }
            } catch (err) {
              console.warn(err);
              return;
            }
          }
      },[])

    return (
        <LinearGradient colors={['#fdfcfb', '#e2d1c3', '#e2d1c3']} style={{flex:1}}>
            <Header onClick ={()=> navigation.goBack(null)} />
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
                            onPressIn={()=> onStartPlay()}
                            onPressOut={()=> onStopPlay()}
                        >
                        {!isRecording ? <View style={styles.startRecord} />
                        : <View style={{...styles.startRecord, backgroundColor: 'red'}} />}
                        </TouchableOpacity>
                </View>
                </View>
            </LinearGradient>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    flex50:{
        flex:50,
        justifyContent:'center',
        alignItems: 'center'
    },
    animatedCircle:{
        width: wp("25"),
        height: wp("25"),
        backgroundColor: 'red',
        borderRadius: wp("25")/2,
        justifyContent:'center',
        alignItems: 'center'
    },
    timer:{
        marginTop: hp("4"),
        fontSize: wp("6"),
        alignSelf:'center'
    },
    button:{
      width: wp("20"),
      height: wp("20"),
      justifyContent:'center',
      alignItems:'center',
      borderRadius: wp("20")/2,
      borderWidth:wp("1"),
      borderColor:'white',
      position:'absolute', bottom:wp("15")
    },
    startRecord:{
      width: wp("15"),
      height: wp("15"),
      backgroundColor:'white',
      borderRadius: wp("15")/2
    }
});

export default AudioRecorder;