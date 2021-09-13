import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles'

/*
  Header component for go back functionality
*/
function Header(props) {
    const { onClick } = props;
    return (
        <TouchableOpacity
        style={styles.container}
        onPress={() => onClick()}>
            <Image source={require("./../../../assets/leftarrow.png")} style={styles.headerBackImage} />
        </TouchableOpacity>
    );
}



export default Header;