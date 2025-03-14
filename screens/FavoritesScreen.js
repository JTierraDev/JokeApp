/**
 * 03-12-25. Jaime Tierra
 * 
 * Favs screen of the app. It display a a list of saved joked
 * 
 * Uses FavoritesContext.js to access globally stored favorite jokes
 * Displays an empty state message
 * Uses FlatList to display the favorites jokes stored 
 * Implements useWindowDimensions to adjust padding dinamically
 * 
 * Dependencies:
 * - JokeCard.js to display the joke properly.
 */
import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

//Use the Favorites Context
import { FavoritesContext } from '../context/FavoritesContext';

//use custom compoent for represent the jokes
import JokeCard from '../components/JokeCard';

// Ensures responsivenes
import { useWindowDimensions } from 'react-native';

export default function FavoritesScreen() {
   
  // Use Global Favorite context
  const { favorites } = useContext(FavoritesContext);
  
  //Use device dimensions
  const { height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      
      {/* If no favorites yet show mesage */}
      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>No favorites yet!</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <JokeCard joke={item} />}
          contentContainerStyle={{
            paddingTop: height * 0.12,   // Use 12% of the screen
            paddingBottom: height * 0.1, 
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //padding: 20,
    //marginTop: 80, 
  },
  emptyText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#888',
  },
});
