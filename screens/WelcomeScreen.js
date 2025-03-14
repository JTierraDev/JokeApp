/**
 * 03-12-25. Jaime Tierra
 * 
 * First screen when the user opens the app.
 * 
 * Display app logo
 * Brief explanation of the app
 * Include a start button
 *  
 * Dependencies:
 * - Use Navigation.js
 */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';

//Use navigation as a prop to change between screens
export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

        {/** Logo up in the screen */}
        <View style={styles.logoContainer}>
            <Image source={require('../assets/calimasolutions_logo.png')} style={styles.logo} />
        </View>
        
        {/** Wellcome and description of the app*/}
        <View style={styles.textContainer}>

            <Text style={styles.title}>Wellcome to JokeApp</Text>

            {/** Little explication*/}
            <Text style={styles.description}>
              This app fetches random jokes from the JokeAPI and lets you save your favorites.{"\n"}{"\n"}
              You can see your favorites without internet connection.{"\n"}{"\n"}
              Enjoy the app and share it with your friends!
            </Text>
        </View>
    
        {/** Custom button */}
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.startButton} onPress={() => navigation.replace('Main')}>
                <Text style={styles.startButtonText}>Al ataquerrrrr</Text>
            </TouchableOpacity>
        </View>        
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,      
    },
    logoContainer: {
      flex: 1, // Primer tercio
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 250,
      height: 250,
      resizeMode: 'contain',
    },
    textContainer: {
      flex: 1, // Segundo tercio
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 30,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      color: '#555',
    },
    buttonContainer: {
      flex: 1, // Último tercio
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    startButton: {
      backgroundColor: '#F9C905',
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 10,
      elevation: 5,
    },
    startButtonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center',
    },
  });