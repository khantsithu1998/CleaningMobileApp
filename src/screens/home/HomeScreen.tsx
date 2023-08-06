import { FlatList, StatusBar, Text, View, ScrollView, SafeAreaView, ActivityIndicator } from "react-native"

import styles from "./Style"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Cleaning from "assets/icons/Cleaning";
import TotalCard from "components/home/TotalCard";
import HeaderBar from "components/header/HeaderBar";
import { useTasks } from "hooks/useTasks";
import { useEffect, useState } from "react";
import { TaskData, TaskType } from "types/taskType";
import { palette } from "utils/theme/colors";

const HomeScreen = () => {

    const { data: response, isInitialLoading, isError, hasNextPage, fetchNextPage } = useTasks();
    const [tasksData, setTaskData] = useState<TaskData[]>([])
    useEffect(() => {
        if (response && response.pages && response.pages.length > 0) {
            const taskList = response.pages.flatMap((page) =>
                page.data ? page.data : []
            );
            setTaskData(taskList);
        }
    }, [response]);


    const tasksList = () => {
        if (isError) {
            return <Text>{'Something went wrong'}</Text>;
        }

        if (isInitialLoading) return <ActivityIndicator color={palette.primary} size={'large'} />;

        if (tasksData?.length) {
            return (
                <FlatList
                    data={tasksData}
                    renderItem={({ item }) => <Item title={item.category.name} subtitle={item.location} />}
                    keyExtractor={item => item.id.toString()}
                />
            );
        }
    };

    const loadMore = () => {
        if (hasNextPage) {
            fetchNextPage();
        }
    };

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
        <View style={styles.header}>

            <HeaderBar name={"Khant Si Thu"} />

            <TotalCard title="Tasks Completed per Week" totalCount={"34"} />

            <TotalCard title="Tasks Duration per Week" totalCount={"46 hours"} />
        </View>
        <View style={styles.listWrapper} >
            <View style={styles.listTitleContainer}>
                <Text>
                    Completed Tasks
                </Text>
                <Text>
                    View All
                </Text>
            </View>
            <View style={styles.listContainer}>

                {tasksList()}
            </View>
        </View>
    </SafeAreaView>
}



export default HomeScreen