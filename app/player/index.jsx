import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const PlayerScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Link href="../perfil">
          <Ionicons name="person-circle-outline" size={24} color="#FFFFFF" />
        </Link>
        <TextInput style={styles.searchBar} placeholder="Pesquisar..." placeholderTextColor="#AFAFAF" />
        <Link href="../home">
        <Ionicons name="home-outline" size={20} color="#FFFFFF" />
        </Link>
      </View>

      <Image
        source={{
          uri: 'https://i.scdn.co/image/ab67616d0000b27363ecdc2fc549275b51fbb9a7',
        }}
        style={styles.albumImage}
      />
      <Text style={styles.songTitle}>1993</Text>
      <Text style={styles.artist}>Matuê</Text>

      {/* Controls */}
      <View style={styles.controls}>
        <TouchableOpacity>
          <Ionicons name="play-back" size={40} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.playPauseButton}>
          <Ionicons name="play" size={40} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="play-forward" size={40} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
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
  albumImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 20,
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  artist: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  playPauseButton: {
    backgroundColor: '#800080',
    padding: 20,
    borderRadius: 50,
  },
});

export default PlayerScreen;
