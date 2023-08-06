import { ActivityIndicator, FlatList, SafeAreaView, StatusBar, Text, View } from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import styles from "./Style"
import HeaderBar from "components/header/HeaderBar"
import { useEffect, useMemo, useState } from "react";
import Calendar from "components/calendar/Calender";
import { palette } from "utils/theme/colors";
import Cleaning from "assets/icons/Cleaning";
import { TaskData } from "types/taskType";
import { useTasks } from "hooks/useTasks";

const TasksScreen = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const { data: response, isInitialLoading, isError, hasNextPage, fetchNextPage } = useTasks({startDate : selectedDate, endDate : selectedDate});
    const [completedTasksData, setCompletedTaskData] = useState<TaskData[]>([])
    useEffect(() => {
        if (response && response.pages && response.pages.length > 0) {
            const taskList = response.pages.flatMap((page) =>
                page.data ? page.data : []
            );
            setCompletedTaskData(taskList);
        }
    }, [response]);

    const loadMore = () => {
        if (hasNextPage) {
            fetchNextPage();
        }
    };


    const tasksList = useMemo(() => {
        if (isError) {
            return <Text>{'Something went wrong'}</Text>;
        }

        if (isInitialLoading) return <ActivityIndicator color={palette.primary} size={'large'} />;

        if (completedTasksData?.length) {
            return (
                <FlatList
                    data={completedTasksData}
                    renderItem={({ item }) => <Item title={item.category.name} subtitle={item.location} />}
                    keyExtractor={item => item.id.toString()}
                    onEndReached={loadMore}
                />
            );
        }
    },[isError,completedTasksData,isInitialLoading]);

    const Item = ({ title, subtitle }: { title: string, subtitle: string }) => (
        <View style={styles.item}>
            <Cleaning height={hp(20)} width={wp(30)} />
            <View style={styles.itemTitleContainer}>
                <Text style={styles.itemTitle}>{title}</Text>
                <Text style={styles.itemSubtitle}>{subtitle}</Text>
            </View>

        </View>
    );

    return <SafeAreaView style={styles.wrapper}>
        <StatusBar backgroundColor={"#232323"} />
        <HeaderBar name={"Khant Si Thu"} />
        <View style={styles.cardContainer}>
            <Text style={styles.title}>My Tasks</Text>
            <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
        </View>
        <View style={styles.listContainer}>
            {tasksList}
        </View>
    </SafeAreaView>
}

export default TasksScreen