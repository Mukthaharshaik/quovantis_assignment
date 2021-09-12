import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RESPONSES } from './../../../utils/keys'



function Home({navigation}) {
  const [data, setData ] = useState([]);
  
  
  useEffect(async()=>{
    navigation.addListener('focus', async() => {
      let data = await AsyncStorage.getItem(RESPONSES);
    if(data){
      setData(JSON.parse(data))
    }
  });


  },[])
  
  
  return (
    <LinearGradient colors={['#fdfcfb', '#e2d1c3', '#e2d1c3']} style={styles.container}>    
                <TouchableOpacity style={styles.button}  onPress={()=> navigation.navigate("videoScreen")} >
                    <Text style={styles.btnText}>Watch Recording</Text>
                </TouchableOpacity>
                {data.length ? <TouchableOpacity style={styles.button}  onPress={()=>navigation.navigate("responseList", { data })} >
                    <Text style={styles.btnText}>Watch Response</Text>
                </TouchableOpacity> : null }
            </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  button:{
      width: '80%',
      backgroundColor:'#638ec9',
      height: hp("7%"),
      borderRadius: hp("7%")/2,
      justifyContent:'center',
      alignItems:'center',
      marginTop: hp("3"),
      elevation:10,
      borderWidth:2,
      borderColor: 'white'
  },
  btnText:{
      color: "#FFFFFF",
      fontSize: wp("4%")
  }
});

export default Home;