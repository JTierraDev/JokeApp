/**
 * 03-13-25. Jaime Tierra
 * 
 * Custom component to represent a Joke Card 
 * 
 *  Displays:
 *    - Joke category
 *    - Joke content
 *    - Flags (if any)
 *    - Safe status (✔ Safe or ⚠ Not Safe)
 *    - Language
 *    - Favorite button (to add/remove from favorites)
 * 
 *  Features:
 *    - If the joke is an error, displays an ErrorCard.
 *    - Uses the `FavoritesContext` to manage favorite jokes.
 *    - Updates favorite status dynamically.
 * 
 *  Dependencies:
 *    - Uses `FavoritesContext` from `FavoritesContext.js`
 *    - Uses `MaterialIcons` for the favorite button
 */
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Import icons for the favorite button
import { MaterialIcons } from '@expo/vector-icons'; 

// Import the favorites context
import { FavoritesContext } from '../context/FavoritesContext'; 

//Error Card
const ErrorCard = ({ category, message }) => (
    <View style={[styles.card, styles.errorCard]}>
      <Text style={styles.errorText}> ¡{category}!</Text>
      <Text style={styles.content}>{message}</Text>
    </View>
);

const categoryIcons = {
  "Programming": "code",
  "Misc": "extension",
  "Dark": "nightlight-round",
  "Pun": "mood",
  "Spooky": "skull",
  "Christmas": "celebration",
  "Any": "emoji-emotions", 
  "Unknown": "help-outline", 
};
  
export default function JokeCard({ joke }) {
  
  // If error in the Joke render the error card 
  if (joke.category.includes("Error")) {
    return <ErrorCard category= {joke.category} message={joke.content} />;
  }

  //Use the Favorite context to add or remove
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  //Use the UID to check if the joke is favorite
  const isFavorite = favorites.some(fav => fav.id === joke.id);

  return (
    <View style={styles.card}>
      
      {/* Top section with category & favorite button */}
      <View style={styles.topContainer}>

        {/* Joke Category */}
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>{joke.category}</Text>
          <MaterialIcons 
            name={categoryIcons[joke.category] || "help-outline"} 
            size={20} 
            color="#555"
            style={styles.categoryIcon}
          />
        </View>
        {/* Favorite Button */}
        <TouchableOpacity 
          style={styles.favoriteButton} 
          onPress={() => isFavorite ? removeFavorite(joke.id) : addFavorite(joke)}
        >
          <MaterialIcons 
            name={isFavorite ? "star" : "star-border"} 
            size={36} 
            color={isFavorite ? "#F9C905" : "#AAA"} 
          />
        </TouchableOpacity>
      </View>

    {/* Flags - Only shows true flags  
    {Object.keys(joke.flags).length > 0 && (
    {Object.values(joke.flags).some(value => value) && (  */}
    {!(joke.flags.None) && Object.values(joke.flags).some(value => value) && (  
    <Text style={styles.flags}>
        Flags: {Object.entries(joke.flags)
        .filter(([_, value]) => value) 
        .map(([key]) => key)
        .join(', ')}
    </Text>
    )}

    {/* Joke Content */}
    <Text style={styles.content}>{joke.content}</Text>

    {/*  Botton of the card with language and safe or not*/}
    <View style={styles.bottomContainer}>

      {/* Language */}
      <View style={styles.languageContainer}>
        <MaterialIcons name="language" size={18} color="#888" />
        <Text style={styles.languageText}> Language: {joke.lang}</Text>
      </View>
  
      {/* Safe Status*/}
      <View style={styles.safeContainer}>
        <MaterialIcons 
        name={joke.safe ? "check-circle" : "error"} 
        size={18} 
        color={joke.safe ? "green" : "red"} 
        />
        <Text style={[styles.safeText, joke.safe ? styles.safeYes : styles.safeNo]}>
          {joke.safe ? "Safe" : "Not Safe"}
        </Text>
  
      </View>
    </View>
    
  </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",  
    justifyContent: "space-between", 
    alignItems: "center",
    marginBottom: 10,  
  },
  categoryContainer: {
    flexDirection: "row",  
    alignItems: "center",
  },
  categoryIcon: {
    marginLeft: 15, 
    //marginRight: 8,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
    width: '90%',  
  },
  favoriteButton: {
    padding: 5, 
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flexShrink: 1, // Permite que el texto se ajuste sin desbordar
  },
  content: {
    fontSize: 16,
    marginVertical: 10,
  },
  flags: {
    fontSize: 14,
    color: '#d9534f', // Color rojo para advertencias
    fontWeight: 'bold',
    marginTop: 5,
  },
  errorCard: {
    backgroundColor: '#F8D7DA', // Rojo claro
    borderColor: '#F5C6CB',
    borderWidth: 1,
  },
  errorText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#721C24',
  },
  bottomContainer: {
    flexDirection: "row",  
    justifyContent: "space-between", 
    alignItems: "center",
    marginTop: 10,
    width: "100%",  
  },  
  languageContainer: {
    flexDirection: "row",  
    alignItems: "center",  
    //marginTop: 10,
  },
  languageText: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#888",
    marginLeft: 5,  
  },
  safeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  safeText: {
    fontSize: 14,
    fontWeight: 'bold',    
  },
  safeYes: {
    color: 'green',
  },
  safeNo: {
    color: 'red',
  },

});
