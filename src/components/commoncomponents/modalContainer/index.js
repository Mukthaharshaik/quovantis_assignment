import React from 'react';
import { Text, View, Modal, TouchableOpacity } from 'react-native'
import styles from './styles'



/*
  This Component is to display full response text
*/
const ModelContainer=({ visible, text, onClose })=>{

  //This function is to close the Modal box
  const closeModal = () =>{
    onClose()
  }
    return (
        <Modal
        animationType={"slide"}
        transparent={true}
        visible={visible}
        onRequestClose={ closeModal }
      >
        <View style={styles.container}>
          <View style={styles.childStyle}>
             <Text style={styles.text}>{text}</Text>
             <TouchableOpacity onPress={ closeModal } style={styles.bottom}>
                <Text style={styles.label}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
}


export default ModelContainer;