import { StyleSheet  } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';





export default styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    backgroundVideo: {
        width: '100%',
        height: wp("60")
    },
    sliderControl:{
        flex:1,
        flexDirection:'row'
    },
    controls:{
        position:'absolute',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        width: '100%',
        height: wp("15"),
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    image:{
        width: wp("8"),
        height: wp("8")
    },
    animateButton:{
        position:'absolute',
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        bottom: hp("20")
    },
    resIcon:{
        width: wp("6"),
        height: wp("6")
    },
    animatedView:{
        width: wp("12"),
        height:wp("12"),
        marginRight: wp("2"),
        borderRadius: wp("12")/2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white',
        elevation:5
    }
})