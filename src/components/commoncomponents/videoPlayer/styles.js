import { StyleSheet  } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




export default styles = StyleSheet.create({
    container:{
        flex: 1
    },
    backgroundVideo: {
        width: '100%',
        height: '100%'
    },
    topControls:{
        position:'absolute',
        width: '100%',
        height: wp("30"),
        top: wp("-27"),
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    controls:{
        position:'absolute',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        width: '100%',
        height: wp("30"),
        bottom: wp("-27"),
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    image:{
        width: wp("8"),
        height: wp("8")
    }
})