import { ActivityIndicator, FlatList, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import styles from "./Style"
import HeaderBar from "components/header/HeaderBar"
import { useCallback, useEffect, useMemo, useState } from "react";
import Calendar from "components/calendar/Calender";
import { palette } from "utils/theme/colors";
import Cleaning from "assets/icons/Cleaning";
import { TaskData } from "types/taskType";
import { useTasks } from "hooks/useTasks";
import VirtualizedBackgroundContainer from "components/home/VirtualizedBackgroundContainer";
import moment from "moment";
import { TouchableOpacity } from "react-native-gesture-handler";

const TasksScreen = ({ route, navigation }: any) => {
    const [dates, setDates] = useState<any[]>([])
    const date = new Date();
    const [selectedDate, setSelectedDate] = useState(moment(date).format('YYYY-MM-DD'));

    const { data: response, isInitialLoading, isError, hasNextPage, fetchNextPage, refetch } = useTasks({ date: selectedDate });

    const taskListData: TaskData[] = response && response.pages && response.pages.length > 0 ? response.pages.flatMap((page) => page.data ? page.data : []) : [];

    const loadMore = () => {
        if (hasNextPage) {
            fetchNextPage();
        }
    };

    useEffect(() => {
        refetch()
    }, [selectedDate])

    // get the dates from today to 10 days from now, format them as strings and store them in state
    const getDates = () => {
        const _dates = []
        for (let i = 0; i < 10; i++) {
            const date = moment().add(i, 'days')
            _dates.push(date)
        }
        setDates(_dates)
    }

    useEffect(() => {
        getDates()
    }, [])


    const tasksList = useMemo(() => {
        console.log("rendering")
        console.log("tasks List")
        if (isError) {
            return <Text>{'Something went wrong'}</Text>;
        }

        if (isInitialLoading) return <ActivityIndicator color={"#fff"} size={'large'} />;

        if (taskListData?.length) {
            return (
                <FlatList
                    data={taskListData}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.id.toString()}
                    onEndReached={loadMore}
                    contentContainerStyle={{ paddingBottom: hp(2) }}
                    style={{ flex: 1, backgroundColor: palette.primary }}
                />
            );
        }

    }, [isError, isInitialLoading, taskListData]);

    const Item = ({ item }: { item: TaskData }) => {
        const date = new Date(item.startTime);

        const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
        const formattedTime = date.toLocaleString('en-US', options);

        return (
            <TouchableOpacity onPress={() => navigation.navigate('TaskDetails', { item: item })}>
                <View style={styles.item}>
                    <Cleaning height={hp(20)} width={wp(30)} />
                    <View style={styles.itemTitleContainer}>
                        <Text style={styles.itemTitle}>{item.category.name}</Text>
                        <Text style={styles.itemSubtitle}>{item.location}</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>{formattedTime}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    };

    return <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={"#232323"} />
        <HeaderBar name={"Khant Si Thu"} />
        <VirtualizedBackgroundContainer style={styles.wrapper}>
            <View style={styles.cardContainer}>
                <Text style={styles.title}>My Tasks</Text>
                <Calendar onSelectDate={setSelectedDate} selected={selectedDate} dates={dates} />
            </View>
            <View style={styles.listContainer}>
                {tasksList}
            </View>
        </VirtualizedBackgroundContainer>
    </View>
}

export default TasksScreen