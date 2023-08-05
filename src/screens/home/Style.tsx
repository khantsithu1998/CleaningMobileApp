

import React from 'react';
import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    wrapper : {
        backgroundColor: "#232323",
        height : hp(150)
    },
    header: {
        backgroundColor: "#232323",
        height : hp(40)
    },
    listWrapper : {
        height : hp(60),
        backgroundColor : "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius : 20
    },
    listTitleContainer : {
        flexDirection : "row",
        justifyContent : 'space-between',
        alignContent : 'space-between',
        paddingHorizontal : wp(10),
        paddingVertical : hp(2)
    },
    listContainer : {

    },
    item : {
        flexDirection : 'row',
        marginHorizontal : wp(5),
        marginBottom : hp(2),
        borderRadius : 10,
        borderColor : '#fff',
        elevation : 1,
        // shadowOffset : {
        //     width : 1,
        //     height : 1
        // }
    },
    itemTitleContainer : {
        paddingVertical : hp(5),
        paddingHorizontal : wp(5)
    },
    itemTitle : {
        color : 'black',
        marginBottom : hp(3)
    },
    itemSubtitle : {}
});

export default styles;
