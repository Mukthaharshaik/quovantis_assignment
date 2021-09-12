import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import * as Animated from 'react-native-animatable';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from './../../commoncomponents'
import { useState } from 'react/cjs/react.development';
import { useNavigation } from '@react-navigation/native'



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

const PlayRecord = () => {

    const [recordTime, setRecordTime ] = useState("00:00");
    const navigation = useNavigation();

    onStartPlay = async () => {
        console.log('onStartPlay');
        const msg = await audioRecorderPlayer.startPlayer();
        console.log(msg);
        audioRecorderPlayer.addPlayBackListener((e) => {
            let recordTime = audioRecorderPlayer.mmssss(
                Math.floor(e.currentPosition),
              );
              let sec = recordTime.toString().split(":")[1]
              let minutes = recordTime.toString().split(":")[0]
              setRecordTime(minutes+":"+sec)
          return;
        });
    };

    useEffect(()=>{
        onStartPlay()
        return()=>{
            audioRecorderPlayer.stopPlayer();
            audioRecorderPlayer.removePlayBackListener();
        }
    },[])


    return (
        <LinearGradient colors={['#fdfcfb', '#e2d1c3', '#e2d1c3']} style={{flex:1}}>
            <Header onClick ={()=> navigation.goBack(null)} />
                <View style={styles.container}>
                <Text style={styles.timer}>{recordTime}</Text>
                <Animated.View
                    animation={pulse}
                    easing="ease-out"
                    iterationCount="infinite"
                    style={styles.animatedCircle}
                >
                </Animated.View> 
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    flex50:{
        flex:50,
        
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
        position: 'absolute',
        top:20,
        fontSize: wp("6"),
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

export default PlayRecord;
