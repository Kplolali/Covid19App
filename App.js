
import 'react-native-gesture-handler';
import React, { useState }  from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

// necessary imports
import Cover from './screens/covers'
import Verification from './screens/verification'
import Information from './screens/generalInformation'
import { GlobalProvider } from './states/states';

//tab imports 
import Home from './screens/navigationScreens/HomeScreen';
import Vitals from './screens/navigationScreens/Vitals';
import Report from './screens/navigationScreens/Report';
import Settings from './screens/navigationScreens/Settings';

// components
import TabBarIcon from './components/tabBarIcon'



const bottomTab = createBottomTabNavigator();

const MainSectionTab = ()=>{
  return (
    <bottomTab.Navigator 
      tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: '#ccc',
        }}
    >
      <bottomTab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({focused})=> (
            <TabBarIcon focused ={focused} name="md-home"/>
            )
        }}
      />
      <bottomTab.Screen name="Report" component={Report} 
        options={{
          tabBarIcon: ({focused})=> (
            <TabBarIcon focused ={focused} name="ios-paper-plane"/>
            )
        }}
      />
      <bottomTab.Screen name="Vitals" component={Vitals}
        options={{
          tabBarIcon: ({focused})=> (
            <TabBarIcon focused ={focused} name="ios-pulse"/>
            )
        }}
      />
      <bottomTab.Screen name="Settings" component={Settings}
        options={{
          tabBarIcon: ({focused})=> (
            <TabBarIcon focused ={focused} name="ios-settings"/>
            )
        }}
      />
    </bottomTab.Navigator>
  )
}


const Stack = createStackNavigator();

export default function App(props){
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  async function loadResourceAsync() {
    await Promise.all([
   
      Font.loadAsync({
        // fonts used
        'Georgia': require('./assets/fonts/Georgia-Regular.ttf'),
        'Georgia-Bold': require('./assets/fonts/georgia-bold.ttf'),
        
      }),
    ]);
  }

  function handleLoadingError(error) {
    // show error
    console.log(error);
  }

  function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
  }

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourceAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {

  const client = new ApolloClient({
    uri:'https://covid19-graphql.netlify.app/'
  })
  return(
    <ApolloProvider client={client}>
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Cover" component={Cover} 
          options={{headerShown: false}}
          />
          <Stack.Screen name="Verification" component={Verification} 
          options={{headerShown: false}}
          />
          <Stack.Screen name="General Information" component={Information} 
          options={{ headerShown: false}}
          />
          <Stack.Screen name="Home" component={MainSectionTab} 
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
    
    </ApolloProvider>
  )
}
}