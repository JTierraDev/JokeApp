/**
 * 03-13-25. Jaime Tierra
 * 
 * Navigation configuration for the application
 * 
 *    Use StackNavigator to manage screen transaitions
 *    Use TabNavigator for the main navigation between the Home and Favorites screens
 * 
 *    MaterialIcons for Custom tabs icons 
 * 
 *    All the screens use the same Header (Header.js), custom component applied globally.
 *    
 */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons'; 

//Screens defined in screens 
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

//Custom componets -> Header.js
import Header from '../components/Header';

//
//Create the navigators
//  Transition in the wellcome screen and tabnavigator
const Stack = createStackNavigator();
//  For the tabs of the App
const Tab = createBottomTabNavigator();

// Tabbed Screens ( HomeScreen and FavoritesScreen)
function TabNavigator() {
  return (
    <Tab.Navigator  
    screenOptions={({ route }) => ({

        // Hide the default header with tab names
        //headerShown: false,
        
        //Use custom component for the Header
        header: () => <Header />,

        //Define the colors for the Tab bar
        tabBarActiveTintColor: '#F9C905', 
        tabBarInactiveTintColor: '#000',  
        
        //Define the icons for the tabs using MaterialICons
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Favorites') {
            iconName = 'star';
          }

          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
        //
        //    Style for the Tab bar
        //
        //  General Tab style
        tabBarStyle: {
          backgroundColor: '#FFF',  
          height: 80,               
          paddingBottom: 10, 
          paddingBottom: 10,
        },
        //  Text with the names
        tabBarLabelStyle: {
          fontSize: 20,  
          fontWeight: 'bold',
        },        
      })}
      >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

// Main navigation | Transition between Wellcome and the App with tabs
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
