import { FlatList, StatusBar, Text, View, ScrollView, SafeAreaView } from "react-native"

import styles from "./Style"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Cleaning from "assets/icons/Cleaning";
import TotalCard from "components/home/TotalCard";
import HeaderBar from "components/header/HeaderBar";
import VirtualizedBackgroundContainer from "components/home/VirtualizedBackgroundContainer";

const HomeScreen = () => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            cleaning_type: 'Floor Cleaning',
            place: 'Main Lobby',
            cleaning_process: 'completed'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            cleaning_type: 'Glass Cleaning',
            place: 'Main Lobby',
            cleaning_process: 'completed'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            cleaning_type: 'Carpet Cleaning',
            place: 'Main Lobby',
            cleaning_process: 'completed'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d75',
            cleaning_type: 'Carpet Cleaning',
            place: 'Main Lobby',
            cleaning_process: 'completed'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d76',
            cleaning_type: 'Carpet Cleaning',
            place: 'Main Lobby',
            cleaning_process: 'completed'
        },
    ];

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
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.cleaning_type} subtitle={item.place} />}
                    keyExtractor={item => item.id}
                />
                {/* {DATA.map((item) => <Item title={item.cleaning_type} subtitle={item.place} /> )} */}
            </View>
        </View>
    </SafeAreaView>
}



export default HomeScreen