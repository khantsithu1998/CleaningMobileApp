
import React from 'react';
import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        paddingVertical: hp(2),
        paddingHorizontal: wp(5),
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignContent : 'space-between'
    },
    nameText: {
        color: "#fff"
    },
    trailingContainer : {
        flexDirection : 'row'
    }

});

export default styles;
