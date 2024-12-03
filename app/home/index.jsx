import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState(''); 
  const [suggestions, setSuggestions] = useState([]); 

  
  const songs = [
    { id: 1, name: '1993', screen: '../player' },
    { id: 2, name: 'Astroworld', screen: '../player' },
    { id: 3, name: 'XO Tour Lif3', screen: '../player' },
    { id: 4, name: 'Me desculpa Jay Z', screen: '../player' },
    { id: 5, name: 'Embalo', screen: '../player' },
    { id: 6, name: 'Flashing Lights', screen: '../player' },
  ];

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text === '') {
      setSuggestions([]);
    } else {
      const filtered = songs.filter((song) =>
        song.name.toLowerCase().includes(text.toLowerCase())
      );
      setSuggestions(filtered);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Barra de pesquisa */}
        <View style={styles.topBar}>
          <Link href="../perfil">
            <Ionicons name="person-circle-outline" size={24} color="#FFFFFF" />
          </Link>
          <TextInput
            style={styles.searchBar}
            placeholder="Pesquisar..."
            placeholderTextColor="#AFAFAF"
            value={searchQuery}
            onChangeText={handleSearch}
          />
          <Ionicons name="home-outline" size={20} color="#FFFFFF" />
        </View>

        {/*Sugestões*/}
        {suggestions.length > 0 && (
          <View style={styles.suggestionsContainer}>
            {suggestions.map((song) => (
              <Link key={song.id} href={song.screen}>
                <Text style={styles.suggestion}>{song.name}</Text>
              </Link>
            ))}
          </View>
        )}

        {/* Home */}
        <Text style={styles.sectionTitle}>Você pode gostar:</Text>
        <View style={styles.grid}>
          {[
            'https://i.scdn.co/image/ab67616d0000b27363ecdc2fc549275b51fbb9a7',
            'https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3',
            'https://i.scdn.co/image/ab67616d00001e020d5a84e4e47399d2726c330c',
            'https://i.scdn.co/image/ab67616d0000b27331760346883afec1e625c2ea',
            'https://i.scdn.co/image/ab67616d0000b273590ad5b3777e955e0c1fb590',
            'https://i.scdn.co/image/ab67616d0000b2739bbd79106e510d13a9a5ec33',
          ].map((imageUri, index) => (
            <View key={index} style={styles.squareCard}>
              <Link href="../player">
                <Image style={styles.squareCard} source={{ uri: imageUri }} />
              </Link>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Artistas populares:</Text>
        <View style={styles.grid}>
          {[
            'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO3nMr04-default.jpg',
            'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO3aogAV-default.jpg',
            'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO4dI4Ei-default.jpg',
          ].map((imageUri, index) => (
            <Image key={index} style={styles.circleCard} source={{ uri: imageUri }} />
          ))}
        </View>

        <Text style={styles.sectionTitle}>Álbuns:</Text>
        <View style={styles.grid}>
          {[
            'https://i.scdn.co/image/ab67616d0000b27363ecdc2fc549275b51fbb9a7',
            'https://i.scdn.co/image/ab67616d0000b273590ad5b3777e955e0c1fb590',
            'https://i.scdn.co/image/ab67616d00001e020d5a84e4e47399d2726c330c',
          ].map((imageUri, index) => (
            <View key={index} style={styles.squareCard}>
              <Link href="../albuns">
                <Image style={styles.squareCard} source={{ uri: imageUri }} />
              </Link>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000', 
  },
  input: {
      width: '80%',
      padding: 10,
      marginBottom: 15,
      borderRadius: 5,
      backgroundColor: '#333', 
      color: '#fff', 
  },
  button: {
      backgroundColor: '#800080', 
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      width: '80%',
  },
  buttonText: {
      color: '#fff', 
      fontWeight: 'bold',
  },
  link: {
      marginTop: 10,
      color: '#800080', 
  },

  container: {
      flex: 1,
      backgroundColor: '#333',
      padding: 15,
  },
  topBar: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
  },
  searchBar: {
      flex: 1,
      height: 35,
      backgroundColor: '#000',
      borderRadius: 15,
      paddingHorizontal: 10,
      marginHorizontal: 8,
      color: '#fff',
      fontSize: 12,
  },
  suggestionsContainer: {
      backgroundColor: '#fff',
      borderRadius: 8,
      marginTop: 5,
      padding: 10,
      elevation: 5,
  },
  suggestion: {
      fontSize: 14,
      paddingVertical: 5,
      color: '#000',
      borderBottomWidth: 1,
      borderBottomColor: '#fff',
  },
  sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      marginVertical: 10,
  },
  grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start', 
      marginHorizontal: -3,
  },
  squareCard: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 120,
      height: 120,
      aspectRatio: 1,
      borderRadius: 8,
      margin: 10, 
      marginBottom: 15,
  },
  circleCard: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 125,
      width: 125,
      borderRadius: 62.5,
      margin: 10, 
      marginBottom: 15,

  },
});

export default HomeScreen;