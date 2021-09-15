import { StyleSheet  } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default styles = StyleSheet.create({
    container:{
        flex: 1
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      recordingLabel:{
        color: 'red',
        fontSize: wp("5"),
        fontWeight:'bold',
        textAlign:'center'
      },
      button:{
        width: wp("20"),
        height: wp("20"),
        justifyContent:'center',
        alignItems:'center',
        borderRadius: wp("20")/2,
        borderWidth:wp("1"),
        borderColor:'white'
      },
      controls:{
        flexDirection: 'row',
        width: '100%',
        justifyContent:'center',
        position: 'absolute',
        bottom:hp("5")
      },
      image:{
          width: wp("15"),
          height: wp("15")
      },
      cameraSwitch:{
          position:'absolute',
          bottom: hp("8"),
          right: wp("8")
      },
      cameraturn:{
        width: wp("10"),
        height: wp("10")
      }
});