/**
 * 03-12-25. Jaime Tierra
 * 
 * Main screen of the app. It display a random Joke fetched from the jokeService.js
 * 
 * Fetches a random joke from the API
 * Displays a loading indicator while fetching
 * Use custom component Uses JokeCard.js to display the joke.
 * Includes a button to fetch another joke
 * 
 * Dependencies:
 * - fetchRandomJoke() from jokeService.js to retrieve the joke.
 * - JokeCard.js to display the joke properly.
 */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity  } from 'react-native';

//Function to fetch a joke from the API
import { fetchRandomJoke } from '../services/jokeService';

//Component that displays the joke 
import JokeCard from '../components/JokeCard';

export default function HomeScreen() {
  //
  //    State variables
  //
  //  Stores random joke, the main one in this screen
  const [joke, setJoke] = useState(null);
  //  Used to controls the loading spinner
  const [loading, setLoading] = useState(false);

  //Function to fetch a new joke using a loading spinner
  const getNewJoke = async () => {
    setLoading(true); 
    const newJoke = await fetchRandomJoke();
    setJoke(newJoke);
    setLoading(false); 

    // Debug
    console.log("Chiste obtenido en formato JSON:\n", JSON.stringify(newJoke, null, 2));
  };

  useEffect(() => {
    getNewJoke();
  }, []);   // Get a Joke when the screen loads

  return (
    <View style={styles.container}>
      
      {/* Show spinner loader */}
      {loading ? (
        <ActivityIndicator size="large" color="#F9C905" />
        ) : (
          joke && <JokeCard joke={joke} />
      )}
        
      {/* Fetch new Joke */}
      <TouchableOpacity style={styles.button} onPress={getNewJoke}>
        <Text style={styles.buttonText}>¡Give me more!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#888',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#F9C905',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 8,
        elevation: 5, 
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
});
      