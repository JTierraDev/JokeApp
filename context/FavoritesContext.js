/**
 * 03-13-25  Jaime Tierra
 * 
 * Manage the favorites jokes of the app using a context
 * 
 *  Use AsyncStorage to persist the data locally
 *  Provides global state 
 *  Expose functions globally to add and remove jokes from favorites
 *  Auto load saves favorites
 * 
 */
import React, { createContext, useState, useEffect } from 'react';

//Use AsyncStorage to persist locally
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create fav context globally
export const FavoritesContext = createContext();

//This componente will envolve all the app to share the context
export const FavoritesProvider = ({ children }) => {

  //Define the state of the favorites
  const [favorites, setFavorites] = useState([]);

  // Load favs using AsyncStorage when open the app 
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem("favorites");
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites)); // JSON to array
        }
      } catch (error) {
        console.error("Error loading favs:", error);
      }
    };
    loadFavorites();
  }, []); //Execute at the begining

  // Save Favs using AsyncStorage when favs change 
  useEffect(() => {
    const saveFavorites = async () => {
      try {
        await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
      } catch (error) {
        console.error("Error saving the favorites", error);
      }
    };
    saveFavorites();
  }, [favorites]); //Execute when favorites state change

  // Add a joke to favorites
  const addFavorite = (joke) => {
    //Check if the joke is in favorites
    if (!favorites.some((fav) => fav.id === joke.id)) {

      //Adding the joke using the setter
      setFavorites([...favorites, joke]); 
    }
  };

  // Remove a joke from favorites
  const removeFavorite = (jokeId) => {
    
    //Remove the joke using the uid 
    setFavorites(favorites.filter((fav) => fav.id !== jokeId)); 
  };

  //Use children to allow al the componentes inside the provider to acces the data
  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
