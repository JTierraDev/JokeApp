/**
 * 03-12-25. Jaime Tierra
 * 
 * Header component used in all screens
 * 
 * Display app logo left and App title centered
 *  
 * Absolute positioning
 * Responsive design
 * Fixed at the top of the screen
 * 
 * 03-14-25 Jaime Tierra
 * 
 *  Add Modal button to the Header with info
 *      Includes useState, TouchableOpacity, Modal and MaterialIcons
 */
import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Header() {

  //Define de Modal State
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.header}>
      {/* Logo */}
      <Image source={require('../assets/calimasolutions_logo.png')} style={styles.logo} />
      
      {/* App Name with corporate style*/}
      <View style={styles.titleContainer}>
        <View style={styles.highlightBox}>
          <Text style={styles.title}>JokeApp</Text>
        </View>
      </View>

      {/* Help Button */}
      <TouchableOpacity style={styles.helpButton} onPress={() => setModalVisible(true)}>
        <MaterialIcons name="info-outline" size={30} color="#000" />
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>About This App</Text>
            <Text style={styles.modalText}>
              This app fetches random jokes from the JokeAPI and lets you save your favorites.
              You can see your favorites without internet connection.
            </Text>
            <Text style={styles.modalText}> JokeApp - Version 1.0</Text>
            <Text style={styles.modalText}> Release Date: 03-14-25</Text>
            <Text style={styles.modalText}> Developed with ❤️ by JTierraDev</Text>           

            {/* Close button */}
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    paddingVertical: 20,
    paddingHorizontal: 25,
    height: 80,
    elevation: 5,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  }, titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlightBox: {
    backgroundColor: '#F9C905',
    alignSelf: 'flex-start', // Ajusta el ancho al contenido del texto
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  helpButton: {
    padding: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: '#F9C905',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
