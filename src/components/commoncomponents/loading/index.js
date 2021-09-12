import React from 'react';
import { Modal, StyleSheet, ActivityIndicator } from 'react-native'
import { View } from 'react-native-animatable';



const Loading = () => {
    return (
       <Modal
            animationType={"slide"}
            transparent={true}
            visible={true}
        >
            <ActivityIndicator />
       </Modal>
    );
};


const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Loading;