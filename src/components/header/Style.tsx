
import React from 'react';
import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#232323",
        paddingVertical: hp(4),
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
