
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import HomeTabNavigator from 'src/navigation/tab/HomeTabNavigator';


const queryClient = new QueryClient();
function App(): JSX.Element {

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <HomeTabNavigator />
      </QueryClientProvider>
    </NavigationContainer>
  );
}



export default App;
