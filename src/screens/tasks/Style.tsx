

import React from 'react';
import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { palette } from 'utils/theme/colors';

const styles = StyleSheet.create({
    wrapper: {
        flex : 1,
        backgroundColor: palette.primary,
    },
    cardContainer: { 
        paddingHorizontal: wp(10), 
        paddingVertical: hp(3), 
        backgroundColor: "#fff",
        borderBottomLeftRadius : wp(5),
        borderBottomRightRadius : wp(5),
     },
    title : {
        fontSize : wp(8),
        fontWeight : 'bold',
        color : 'black'
    },
    listContainer : {
        flex : 1,
        paddingVertical : hp(2),
        backgroundColor : palette.primary
    },
    item : {
        backgroundColor : "#fff",
        flexDirection : 'row',
        paddingHorizontal : wp(10),
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
        fontWeight : 'bold',
        fontSize : wp(4.5),
        marginBottom : hp(3)
    },
    itemSubtitle : {
        color : 'black',
    },
    timeContainer : {
        borderRadius : wp(3),
        height : hp(5),
        marginTop : hp(17),
        marginLeft : wp(72),
        position : 'absolute',
        width : wp(20),
        backgroundColor : 'black',
        justifyContent : 'center',
        alignItems : 'center'
    },
    timeText : {
        color : 'white'
    }
});

export default styles;
