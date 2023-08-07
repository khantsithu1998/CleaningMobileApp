import HeaderBar from "components/header/HeaderBar"
import { StatusBar, Text, View } from "react-native"
import styles from "./Style"
import { TouchableOpacity } from "react-native-gesture-handler"
import FilterOut from "assets/icons/FilterOut"

const ScheduleScreen = () => {
    return <View>
        <StatusBar backgroundColor={"#232323"} />
        <HeaderBar name={"Khant Si Thu"} />
        <View style={styles.filterContainer}>
            <View style={styles.headerBtnRowContainer}>
                <TouchableOpacity style={styles.headerBtn} onPress={() => { }}>
                    <Text style={styles.headerBtnText}>Daily</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerBtn} onPress={() => { }}>
                    <Text style={styles.headerBtnText}>Weekly</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerBtn} onPress={() => { }}>
                    <Text style={styles.headerBtnText}>Montly</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FilterOut />
            </View>
        </View>
    </View>
}

export default ScheduleScreen