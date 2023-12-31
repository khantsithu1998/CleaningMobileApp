import React, { useContext } from 'react';
import { Easing } from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { palette } from 'utils/theme/colors';
import HomeScreen from 'src/screens/home/HomeScreen';
import TasksScreen from 'src/screens/tasks/TasksScreen';
import TaskDetailsScreen from 'src/screens/taskDetails/TaskDetailScreen';

const Stack = createStackNavigator();

const config = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  },
} as const;

const TasksStackNavigator = () => {

//   const headerTitle = useAtomValue(headerTitleAtom)

  const headerOption : StackNavigationOptions = {
    // title: headerTitle,
    headerStyle: {
      backgroundColor: palette.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Poppins-Medium',
      fontSize: hp(2),
    },
    headerTitleAlign: 'center',
  };

  return (
    <Stack.Navigator
      screenOptions={{
        gestureDirection: 'horizontal',
        gestureEnabled: true,
        headerBackTitleVisible: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: config,
          close: config,
        },
      }}>
      <Stack.Screen
        name="Tasks"
        component={TasksScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TaskDetails"
        component={TaskDetailsScreen}
        options={{ headerShown: false }}
      />
      
      <Stack.Group screenOptions={{ presentation: 'transparentModal', headerShown: false }} >
        
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default TasksStackNavigator;
