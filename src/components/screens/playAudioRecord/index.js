import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import * as Animated from 'react-native-animatable';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from '../../commoncomponents'
import { useState } from 'react/cjs/react.development';
import { useNavigation, useRoute } from '@react-navigation/native'
import { shrinkAndGrowAnimation as pulse } from '../../../utils';
import styles from './styles'



const audioRecorderPlayer = new AudioRecorderPlayer();

const PlayAudioRecord = () => {

    const [recordTime, setRecordTime ] = useState("00:00");
    const navigation = useNavigation();
    const route = useRoute();

    //This function is to play the audio file. 
    const onStartPlay = async () => {
        let { params={} } = route;
        let { path } = params;
        await audioRecorderPlayer.startPlayer(path);
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

    //This hook is to play audio and stop audio once unmounted 
    useEffect(()=>{
        onStartPlay()
        return()=>{
            audioRecorderPlayer.stopPlayer();
            audioRecorderPlayer.removePlayBackListener();
        }
    },[])


    return (
        <LinearGradient colors={['#fdfcfb', '#e2d1c3', '#e2d1c3']} style={styles.main}>
            <Header />
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


export default PlayAudioRecord;
