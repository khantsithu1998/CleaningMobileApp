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
      fontSize: 20,
      fontWeight: 'bold',
    },
    dateSection: {
      width: wp(80),
    },
    scroll: {
    },
  })

export default styles;