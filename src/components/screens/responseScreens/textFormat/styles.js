import { StyleSheet  } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default styles = StyleSheet.create({
    container:{
        flex: 1
    },
    textInput:{
        borderColor: '#888c84',
        borderWidth:3,
        padding: 10,
        height: hp("30"),
        margin: wp("5"),
        textAlignVertical: 'top',
        color: 'black',
        borderRadius:wp("2"),
        fontSize: wp("4")
    },
    respondBtn:{
        position:'absolute',
        bottom: wp("10"),
        width: '90%',
        height:wp("12"),
        borderRadius: wp("2"),
        backgroundColor: "#638ec9",
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    respondLabel:{
        color: 'white',
        fontSize: wp("4")
    }
})