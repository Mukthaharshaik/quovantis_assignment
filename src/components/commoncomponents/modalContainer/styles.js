import { StyleSheet  } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center'
    },
    childStyle:{
      backgroundColor:"white",
      width: '85%',
      minHeight: hp("20"),
      borderRadius: wp("3"),
      padding:wp("3")
    },
    text:{
      fontSize: wp("3.5"),
      marginBottom: wp("12")
    },
    bottom:{
      position: 'absolute',
      bottom:10,
      alignSelf:'center',
      padding: wp("2"),
      borderRadius: wp("2"),
      backgroundColor: "#638ec9",
      alignItems:'center',
      justifyContent:'center',
    },
    label:{
      color: 'white'
    }
  });