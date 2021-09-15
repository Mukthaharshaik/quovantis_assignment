import { StyleSheet  } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default styles = StyleSheet.create({
    container:{
        flex: 1
    },
    itemContainer:{
        height:wp("20"),
        padding: wp("3"),
        backgroundColor:'white',
        margin: wp("2"),
        marginBottom:wp("0.5"),
        borderRadius:wp("1"),
        elevation: wp("5")
    },
    subitemContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    date:{
        margin:wp("1"),
        fontSize: wp("3.5")
    },
    image:{
        width: wp("8"),
        height: wp("8"),
        alignSelf: 'flex-end',
        textAlignVertical:'center'
    },
    text:{
        fontSize: wp("3"),
        marginTop: wp("3")
    },
    datetext:{
        fontSize: wp("3"),
    },
    emptyText:{
        color: '#969595',
        fontSize: wp("5"),
        alignSelf:'center',
        fontStyle:'italic',
        marginTop: hp("15")
    }
});