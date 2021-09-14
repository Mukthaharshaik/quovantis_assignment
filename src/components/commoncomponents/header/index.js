import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

/*
  Header component for go back functionality
*/
function Header(props) {

    let navigation = useNavigation();

    //This function use to goback to the previous screen
    const goBack = () =>{
        if(navigation.canGoBack())
            navigation.goBack();
    }
    return (
        <TouchableOpacity
        style={styles.container}
        onPress={ goBack }>
            <Image source={require("./../../../assets/leftarrow.png")} style={styles.headerBackImage} />
        </TouchableOpacity>
    );
}



export default Header;