import { Text, View } from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import styles from "./Style"
import SearchIcon from "assets/icons/SearchIcon"
import NotificationIcon from "assets/icons/NotificationIcon"

const HeaderBar = ({ name }: { name: string }) => {
    return <View style={styles.container}>
        <View>
            <Text style={styles.nameText}>{name}</Text>
        </View>

        <View style={styles.trailingContainer}>
            <SearchIcon/>
            <View style={{ width : wp(7)}}></View>
            <NotificationIcon/>
        </View>

    </View>
}

export default HeaderBar