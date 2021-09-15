import { StyleSheet  } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        width: '80%',
        backgroundColor:'#638ec9',
        height: hp("7%"),
        borderRadius: hp("7%")/2,
        justifyContent:'center',
        alignItems:'center',
        marginTop: hp("3"),
        elevation:10,
        borderWidth:2,
        borderColor: 'white'
    },
    btnText:{
        color: "#FFFFFF",
        fontSize: wp("4%")
    }
  });
  