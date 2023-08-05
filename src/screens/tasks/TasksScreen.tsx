import { SafeAreaView, StatusBar, Text, View } from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import styles from "./Style"
import HeaderBar from "components/header/HeaderBar"
import { useState } from "react";
import Calendar from "components/calendar/Calender";

const TasksScreen = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    return <SafeAreaView style={styles.wrapper}>
        <StatusBar backgroundColor={"#232323"} />
        <HeaderBar name={"Khant Si Thu"} />
        <View style={styles.cardContainer}>
            <Text style={styles.title}>My Tasks</Text>
            <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
        </View>
    </SafeAreaView>
}

export default TasksScreen