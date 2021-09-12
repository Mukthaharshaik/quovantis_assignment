import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { saveText } from './../../../../utils/commonMethods'
import { Header } from './../../../commoncomponents'



function TextFormat({ navigation }) {

    const [ text, setText ] = useState(null);

    saveResponse=()=>{
        saveText(text, "text")
    }

    return (
        <LinearGradient colors={['#fdfcfb', '#e2d1c3', '#e2d1c3']} style={{flex:1}}>
                <Header onClick ={()=> navigation.goBack(null)} />
                <View style={styles.container}>
                <TextInput
                    multiline={true}
                    placeholder={"Enter text here..."}
                    placeholderTextColor="black"
                    style={styles.textInput} 
                    onChangeText={(txt)=> setText(txt) } 
                />
                <TouchableOpacity activeOpacity={0.8} style={styles.respondBtn} onPress={()=> this.saveResponse()}>
                    <Text style={styles.respondLabel}>Respond</Text>
                </TouchableOpacity>
                </View>
            </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    textInput:{
        borderColor: '#888c84',
        borderWidth:3,
        padding: 10,
        height: hp("30"),
        margin: wp("5"),
        textAlignVertical: 'top',
        color: 'black',
        borderRadius:wp("2"),
        fontSize: wp("4")
    },
    respondBtn:{
        position:'absolute',
        bottom: wp("10"),
        width: '90%',
        height:wp("12"),
        borderRadius: wp("2"),
        backgroundColor: "#638ec9",
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    respondLabel:{
        color: 'white',
        fontSize: wp("4")
    }
})

export default TextFormat;