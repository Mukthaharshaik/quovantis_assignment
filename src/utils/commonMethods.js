import AsyncStorage from '@react-native-async-storage/async-storage'
import { RESPONSES, INTERNALSTORAGEFOLDERNAME } from './keys'
var RNFS = require('react-native-fs');
import { ToastAndroid, Platform } from 'react-native'
import logger from './logger'

export const notifyMessage=(msg)=> {
    console.log("kkkkkkkkkk :", msg)
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.LONG)
      console.log("kkkkkkkkkk 1111111 :", msg)
    } else {
        alert(msg);
    }
}


export const saveResponse=async(filePath, type)=>{
    let arr = filePath.split("/");
        let fileName = new Date().getTime().toString()+arr[arr.length-1];;
        let date = new Date();
        if(await RNFS.exists(filePath)){
          const DirectoryPath= RNFS.PicturesDirectoryPath +`${INTERNALSTORAGEFOLDERNAME}`;
          RNFS.mkdir(DirectoryPath);
          let path = RNFS.PicturesDirectoryPath+`/${INTERNALSTORAGEFOLDERNAME}/`+fileName;
          RNFS.copyFile(filePath, path).then(async() => {
              let data = await AsyncStorage.getItem(RESPONSES);
              if(data){
                  let merge=[];
                  merge.push({type, path, date})
                  merge.push(...JSON.parse(data));
                  await AsyncStorage.setItem(RESPONSES,JSON.stringify(merge))
              }else{
                  await AsyncStorage.setItem(RESPONSES,JSON.stringify([{ 
                      type,
                      path,
                      date
                  }]))
              }
              notifyMessage("Response recorded successfully")
          }, (error) => {
              logger.log("CopyFile fail for video: " + error);
          });
      }
}

export const saveText=async(text,type)=>{
    let data = await AsyncStorage.getItem(RESPONSES);
    let date = new Date();
    if(data){
        let merge=[];
        merge.push({type, text, date})
        merge.push(...JSON.parse(data));
        await AsyncStorage.setItem(RESPONSES,JSON.stringify(merge))
    }else{
        await AsyncStorage.setItem(RESPONSES,JSON.stringify([{
            type,
            text,
            date
        }]))
    }
    notifyMessage("Response saved successfully")
}