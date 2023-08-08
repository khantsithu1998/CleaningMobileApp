

import React from 'react';
import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { palette } from 'utils/theme/colors';

const styles = StyleSheet.create({
    wrapper : {
        
        
    },
    headerContainer : {
        paddingVertical : hp(5),
        paddingHorizontal : wp(10)
    },
    titleContainer : {
        marginVertical : hp(3)
    },
    titleText : {
        fontSize : wp(5),
        color : '#000'
    },
    subtitleText : {},
    locationContainer : {},
    locationTitle : {
        color : '#000',
        fontWeight : 'bold',
        fontSize : wp(5),
    },
    locationText : {
        marginTop  :hp(1),
        color : '#000',
        fontSize : wp(4),
    }
});

export default styles;
