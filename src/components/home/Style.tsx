
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  
  container : {
    marginTop : hp(3),
    paddingVertical : hp(3),
    paddingHorizontal : wp(10),
    backgroundColor : "#393939",
    width : wp(60),
    alignSelf : 'center',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 10
  },
  text : {
    color : 'white',
    
  }
});

export default styles;
