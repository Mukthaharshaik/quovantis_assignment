import { StyleSheet  } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default styles = StyleSheet.create({
    container:{
        flex: 1
    },
    flex50:{
        flex:50,
        justifyContent:'center',
        alignItems: 'center'
    },
    animatedCircle:{
        width: wp("25"),
        height: wp("25"),
        backgroundColor: 'red',
        borderRadius: wp("25")/2,
        justifyContent:'center',
        alignItems: 'center'
    },
    timer:{
        marginTop: hp("4"),
        fontSize: wp("6"),
        alignSelf:'center'
    },
    button:{
      width: wp("20"),
      height: wp("20"),
      justifyContent:'center',
      alignItems:'center',
      borderRadius: wp("20")/2,
      borderWidth:wp("1"),
      borderColor:'white',
      position:'absolute', bottom:wp("15")
    },
    startRecord:{
      width: wp("15"),
      height: wp("15"),
      backgroundColor:'white',
      borderRadius: wp("15")/2
    }
});