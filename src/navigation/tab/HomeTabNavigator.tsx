import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

//Style
import styles from './Style';

import { palette } from 'utils/theme/colors';
import { Platform } from 'react-native';
import HomeStackNavigator from '../stack/HomeStackNavigator';
import TasksStackNavigator from '../stack/TasksStackNavigator';

// Icons
import HomeFocused from 'assets/icons/HomeFocused';
import Home from 'assets/icons/Home';
import ReportStackNavigator from '../stack/ReportStackNavigator';
import SchduleStackNavigator from '../stack/ScheduleStackNavigator';

const Stacks: string[] = [

];
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarLabelStyle: styles.tabLabel,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: 'gray',
        // tabBarActiveBackgroundColor: palette.primary,
        tabBarItemStyle: styles.tabItem,
        tabBarHideOnKeyboard: true,
        unmountOnBlur: true,
        tabBarIcon: ({ focused }) => {
          let iconName;
          switch (route.name) {
            case 'HomeStack':
              if (focused) iconName = <HomeFocused />;
              else iconName = <Home />;
              break;
            case 'TasksStack':
              if (focused) iconName = <HomeFocused />;
              else iconName = <Home />;
              break;
            case 'ScheduleStack':
              if (focused) iconName = <HomeFocused />;
              else iconName = <Home />;
              break;
            case 'ReportStack':
              if (focused) iconName = <HomeFocused />;
              else iconName = <Home />;
              break;
            default:
              break;
          }
          return iconName;
        },
        tabBarStyle: (route => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          if (Stacks.includes(routeName)) {
            return { display: 'none' };
          }
          return {
            backgroundColor: '#F5F5F5',
            elevation: 0.7,
            height : hp(12),
            paddingHorizontal: hp(3),
          };
        })(route),
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{ title: "Home" }}
      />

      <Tab.Screen
        name="TasksStack"
        component={TasksStackNavigator}
        options={{ title: "Tasks" }}
      />

      <Tab.Screen
        name="ScheduleStack"
        component={SchduleStackNavigator}
        options={{ title: "Schedule" }}
      />

      <Tab.Screen
        name="ReportStack"
        component={ReportStackNavigator}
        options={{ title: "Report" }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
