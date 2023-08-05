
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeTabNavigator from 'src/navigation/tab/HomeTabNavigator';



function App(): JSX.Element {
  
  return (
    <NavigationContainer>
       <HomeTabNavigator/>
    </NavigationContainer>
  );
}



export default App;
