import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { saveText } from './../../../../utils/commonMethods'
import { Header } from './../../../commoncomponents'
import styles from './styles'

/*
    This screen is to type and save the text response
*/
function TextFormat({ navigation }) {

    const [ text, setText ] = useState(null);

    //This function is to save the text response in local storage
    const saveResponse=()=>{
        saveText(text, "text")
    }

    //This function is to save the text response in useState
    const onTextChange = (txt) =>{
        setText(txt)
    }

    return (
        <LinearGradient colors={['#fdfcfb', '#e2d1c3', '#e2d1c3']} style={styles.container}>
                <Header />
                <View style={styles.container}>
                <TextInput
                    multiline={true}
                    placeholder={"Enter text here..."}
                    placeholderTextColor="black"
                    style={styles.textInput} 
                    onChangeText={ onTextChange } 
                />
                <TouchableOpacity activeOpacity={0.8} style={styles.respondBtn} onPress={ saveResponse }>
                    <Text style={styles.respondLabel}>Respond</Text>
                </TouchableOpacity>
                </View>
            </LinearGradient>
    );
}



export default TextFormat;