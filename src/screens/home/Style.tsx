

import React from 'react';
import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { palette } from 'utils/theme/colors';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#232323",
        flex : 1,
    },
    header: {
        backgroundColor: "#232323",
        height: hp(30)
    },
    listWrapper: {
        height: hp(60),
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    listTitleContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignContent: 'space-between',
        paddingHorizontal: wp(10),
        paddingVertical: hp(2)
    },
    listTitle : {
        color : 'black',
        fontSize : wp(5),
        fontWeight : 'bold',
    },
    viewAllTitle : {
        fontSize : wp(4),
        color : 'black'
    },
    listContainer: {
        flex: 1,
        paddingVertical: hp(3)
    },
    item: {

        flexDirection: 'row',
        marginHorizontal: wp(5),
        paddingHorizontal : wp(4),
        marginBottom: hp(2),
        borderRadius: 10,
        borderColor: '#fff',
        backgroundColor: '#fff',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },
    itemTitleContainer: {
        paddingVertical: hp(2),
        paddingHorizontal: wp(5)
    },
    itemTitle: {
        color: 'black',
        fontWeight : 'bold',
        marginBottom: hp(3)
    },
    itemSubtitle: {
        color : 'black',
    },
    completeContainer : {
        height : hp(3),
        backgroundColor : palette.primary,
        paddingHorizontal : wp(3),
        paddingVertical : hp(0.3),
        borderRadius : wp(3),
        marginTop : hp(10)
    },
    completeText : {
        color : 'green',
        fontSize : wp(3.5)
    }
});

export default styles;
