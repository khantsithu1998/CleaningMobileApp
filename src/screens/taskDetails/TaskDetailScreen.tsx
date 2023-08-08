import HeaderBar from "components/header/HeaderBar";
import VirtualizedBackgroundContainer from "components/home/VirtualizedBackgroundContainer";
import { StatusBar, Text, View } from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import styles from "./Style";
import Cleaning from "assets/icons/Cleaning";

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { TaskData } from "types/taskType";
import SwipeButton from "components/swipeButton/SwipeButton";

type RootStackParamList = {
    Tasks: undefined;
    TaskDetails: { item: TaskData }; // Assuming TaskData is the type of your item
};

type TaskDetailsScreenRouteProp = RouteProp<RootStackParamList, 'TaskDetails'>;

type TaskDetailsScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'TaskDetails'
>;

type RouteParamsType = {
    route: TaskDetailsScreenRouteProp;
    navigation: TaskDetailsScreenNavigationProp;
};


const TaskDetailsScreen = ({ route, navigation }: RouteParamsType) => {

    const { item } = route.params;

    console.log(item)

    return <View>
        <StatusBar backgroundColor={"#232323"} />
        <HeaderBar name={"Khant Si Thu"} />
        <VirtualizedBackgroundContainer style={styles.wrapper}>
            <View style={styles.headerContainer}>
                <Cleaning height={hp(20)} width={wp(80)} />
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{item.category.name}</Text>
                    <Text style={styles.subtitleText}>{item.description}</Text>
                </View>
                <View style={styles.locationContainer}>
                    <Text style={styles.locationTitle}>Location</Text>
                    <Text style={styles.locationText}>{item.location}</Text>
                </View>
            </View>
            <View style={{ justifyContent : 'center'}}>
            <SwipeButton onToggle={() => {}}/>
            </View>
        </VirtualizedBackgroundContainer>
    </View>
}

export default TaskDetailsScreen;