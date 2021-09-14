import AsyncStorage from '@react-native-async-storage/async-storage'
import { RESPONSES } from './keys'
var RNFS = require('react-native-fs');
import { ToastAndroid, Platform } from 'react-native'


export const notifyMessage=(msg)=> {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
        alert(msg);
    }
}


export const saveResponse=async(filePath, type)=>{
    let arr = filePath.split("/");
        let fileName = new Date().getTime().toString()+arr[arr.length-1];;
        let date = new Date();
        if(await RNFS.exists(filePath)){
          const DirectoryPath= RNFS.PicturesDirectoryPath +'/com.quovantis';
          RNFS.mkdir(DirectoryPath);
          let path = RNFS.PicturesDirectoryPath+"/com.quovantis/"+fileName;
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
              console.log("CopyFile fail for video: " + error);
          });
      }
}