import { FlatList, StatusBar, Text, View, ScrollView, SafeAreaView, ActivityIndicator } from "react-native"

import styles from "./Style"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Cleaning from "assets/icons/Cleaning";
import TotalCard from "components/home/TotalCard";
import HeaderBar from "components/header/HeaderBar";
import { useCompletedTasks } from "hooks/useCompletedTasks";
import { useEffect, useMemo } from "react";
import { TaskData } from "types/taskType";
import { palette } from "utils/theme/colors";
import VirtualizedBackgroundContainer from "components/home/VirtualizedBackgroundContainer";
import { useTasksCountCompletedByWeek } from "hooks/useTasksCompletedPerWeek";
import moment from "moment";
import { useTasksDurationPerWeek } from "hooks/useTasksDurationPerWeek";

const HomeScreen = () => {
    const getStartOfWeek = (date: Date) => {
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust for Sunday

        return new Date(date.setDate(diff));
    }

    const currentDate = new Date(); // Or any other date you want
    const weekStartDate = getStartOfWeek(currentDate);

    const { data: tasksCountCompletedByWeekResponse } = useTasksCountCompletedByWeek({ weekStartDate: moment(weekStartDate).format('YYYY-MM-DD') });
    const { data: tasksDuartionCompletedPerWeekResponse } = useTasksDurationPerWeek({ weekStartDate: moment(weekStartDate).format('YYYY-MM-DD') });
    const { data: response, isInitialLoading, isError, hasNextPage, fetchNextPage } = useCompletedTasks({ date: null });

    const taskListData: TaskData[] = response && response.pages && response.pages.length > 0 ? response.pages.flatMap((page) => page.data ? page.data : []) : [];

    const loadMore = () => {
        if (hasNextPage) {
            fetchNextPage();
        }
    };

    useEffect(() => {
        console.log(tasksDuartionCompletedPerWeekResponse)
    }, [tasksDuartionCompletedPerWeekResponse])

    const tasksList = useMemo(() => {
        if (isError) {
            return <Text>{'Something went wrong'}</Text>;
        }

        if (isInitialLoading) return <ActivityIndicator color={palette.primary} size={'large'} />;

        if (taskListData?.length) {
            return (
                <FlatList
                    data={taskListData}
                    renderItem={({ item }) => <Item title={item.category.name} subtitle={item.location} isCompleted={item.isCompleted} />}
                    keyExtractor={item => item.id.toString()}
                    onEndReached={loadMore}
                />
            );
        }
    }, [[isError, taskListData, isInitialLoading]]);


    const Item = ({ title, subtitle, isCompleted }: { title: string, subtitle: string, isCompleted: boolean }) => (
        <View style={styles.item}>
            <Cleaning height={hp(15)} width={wp(20)} />
            <View style={styles.itemTitleContainer}>
                <Text style={styles.itemTitle}>{title}</Text>
                <Text style={styles.itemSubtitle}>{subtitle}</Text>
            </View>
            {isCompleted ? <View style={styles.completeContainer}>
                <Text style={styles.completeText}>Completed</Text>
            </View> : <></>}
        </View>
    );

    return <View style={styles.wrapper}>
        <StatusBar backgroundColor={"#232323"} />
        <HeaderBar name={"Khant Si Thu"} />
        <VirtualizedBackgroundContainer>
            <View style={styles.header}>

                <TotalCard title="Tasks Completed per Week" totalCount={tasksCountCompletedByWeekResponse?.completedTasksCount?.toString() ?? "0"} />

                <TotalCard title="Tasks Duration per Week" totalCount={`${tasksDuartionCompletedPerWeekResponse?.totalDurationInHours?.toString()} Hours` ?? "0 Hour"} />
            </View>
            <View style={styles.listWrapper} >
                <View style={styles.listTitleContainer}>
                    <Text style={styles.listTitle}>
                        Completed Tasks
                    </Text>
                    <Text style={styles.viewAllTitle}>
                        View All
                    </Text>
                </View>
                <View style={styles.listContainer}>

                    {tasksList}
                </View>
            </View>
        </VirtualizedBackgroundContainer>
    </View>
}



export default HomeScreen