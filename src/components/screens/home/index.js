import React, { useEffect, useState, useCallback } from 'react';
import { Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RESPONSES } from './../../../utils/keys'
import { logger, ScreenNames } from './../../../utils'
import styles from './styles'

/*
  Home screen to display watch video and watch responses buttons.
*/
function Home({navigation}) {
  const [data, setData ] = useState([]);  // To store Asyncstorage data.
  
  //It will take local storage data whenever home screen focused then it will set to the state.
  useEffect(async()=>{
    navigation.addListener('focus', async() => {
      let data = await AsyncStorage.getItem(RESPONSES);
    if(data){
      setData(JSON.parse(data))
    }
  });
  },[])

  //This function navigate to video screen
  const navigate= (screen, data) =>{
    if(screen===ScreenNames.VIDEOSCREEN)
      navigation.navigate(ScreenNames.VIDEOSCREEN)
    if(screen===ScreenNames.RESPONSELIST)
      navigation.navigate(ScreenNames.RESPONSELIST, { data })
  }
  console.log("eeeeeee :", data)
  return (
    <LinearGradient colors={['#fdfcfb', '#e2d1c3', '#e2d1c3']} style={styles.container}>    
                <TouchableOpacity style={styles.button}  onPress={()=> navigate(ScreenNames.VIDEOSCREEN) } >
                    <Text style={styles.btnText}>Watch Recording</Text>
                </TouchableOpacity>
                {data.length ? <TouchableOpacity onPress={()=> navigate(ScreenNames.RESPONSELIST, data)} style={styles.button} >
                    <Text style={styles.btnText}>Watch Response</Text>
                </TouchableOpacity> : null }
            </LinearGradient>
  );
}


export default Home;