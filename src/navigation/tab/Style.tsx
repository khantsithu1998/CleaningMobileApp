import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  
  tabItem: {
    flexDirection: 'column',
    height: hp(10),
  },
  tabLabel: {
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Medium',
  },
});

export default styles;
