/**
 * 03-13-25. Jaime Tierra
 * 
 * Global context FavoritesProvider for manage favourites
 * Ensures the UI respects safe areas using `SafeAreaView`
 * Use Navigation to manage screen transitions and tab navigation
 */
import React from 'react';
import Navigation from './navigation/Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

//Para tener el contexto de los favoritos
import { FavoritesProvider } from './context/FavoritesContext'; 

//All the screens can access to the favorites context
export default function App() {
  return (
    <FavoritesProvider>
      <SafeAreaView style={styles.safeContainer}>
        <Navigation />
      </SafeAreaView>
    </FavoritesProvider>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#FFF', 
  },
});