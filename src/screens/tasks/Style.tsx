

import React from 'react';
import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { palette } from 'utils/theme/colors';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: palette.primary,
        height: hp(150)
    },
    cardContainer: { 
        paddingHorizontal: wp(10), 
        paddingVertical: hp(3), 
        backgroundColor: "#fff",
        borderRadius:wp(5)
     },
    title : {
        fontSize : wp(8)
    },
    listContainer : {
        flex : 1,
        backgroundColor : palette.primary
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
