import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



function Header(props) {
    const { onClick } = props;
    return (
        <TouchableOpacity
        style={{backgroundColor: 'transparent', marginTop: wp("3"), marginBottom: wp("3")}}
        onPress={() => onClick()}>
            <Image source={require("./../../../assets/leftarrow.png")} style={styles.headerBackImage} />
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    headerBackImage:{
      width: wp("8"),
      height: wp("8")
    }
  })

export default Header;