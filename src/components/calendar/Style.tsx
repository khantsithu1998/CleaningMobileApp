import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    todayTextContainer : {
      marginVertical : hp(2),
      flexDirection : 'row',
      justifyContent : 'space-between'
    },
    title: {
      color : 'black',
      fontSize : wp(6),
      fontWeight: 'bold',
    },
    dateTitle : {
      color : 'black',
      fontSize : wp(4),
    },
    dateSection: {
      width: wp(80),
    },
    scroll: {
    },
  })

export default styles;