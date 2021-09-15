import { StyleSheet  } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default styles=StyleSheet.create({
    container:{
        backgroundColor: 'transparent', 
        marginTop: wp("3"), 
        marginBottom: wp("3")
    },
    headerBackImage:{
      width: wp("8"),
      height: wp("8"),
      margin: wp("5")
    }
  })