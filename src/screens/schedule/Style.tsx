

import React from 'react';
import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { palette } from 'utils/theme/colors';

const styles = StyleSheet.create({
    filterContainer : {
        height : hp(10),
        flexDirection : "row",
        backgroundColor : "#F2F7FA",
        justifyContent : 'space-between',
        paddingHorizontal : wp(2),
        paddingVertical : hp(3),
        marginHorizontal : wp(5),
        marginVertical : hp(3),
        borderRadius : 10
    },
    headerBtn : {
        borderRadius : wp(2),
        paddingVertical : hp(1),
        paddingHorizontal :wp(3),
        marginHorizontal : wp(2),
        backgroundColor : palette.primary,
    },
    headerBtnRowContainer : {
       flexDirection : 'row'
    },
    headerBtnText : {
        color : "#fff"
    }
});

export default styles;
