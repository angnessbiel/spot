import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const AlbumScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <Link href="../home">
          <Ionicons name="arrow-back-outline" size={24} color="#FFFFFF" />
        </Link>
        <TextInput style={styles.searchBar} placeholder="Pesquisar..." placeholderTextColor="#AFAFAF" />
        <Ionicons name="share-social-outline" size={24} color="#FFFFFF" />
      </View>

      <View style={styles.albumInfo}>
        <Text style={styles.albumName}>Nome do Álbum: "333"</Text>
        <Text style={styles.albumRelease}>Lançamento: 2024</Text>
      </View>

      <Text style={styles.sectionTitle}>Músicas:</Text>
      <View style={styles.grid}>
        {[
          {
            title: 'Crack com Mussilon',
            imageUri: 'https://i.scdn.co/image/ab67616d0000b27363ecdc2fc549275b51fbb9a7',
          },
          {
            title: 'Imagina esse Cenário',
            imageUri: 'https://i.scdn.co/image/ab67616d0000b27363ecdc2fc549275b51fbb9a7',
          },
          {
            title: 'Isso é Sério',
            imageUri: 'https://i.scdn.co/image/ab67616d0000b27363ecdc2fc549275b51fbb9a7',
          },
          {
            title: '1993',
            imageUri: 'https://i.scdn.co/image/ab67616d0000b27363ecdc2fc549275b51fbb9a7',
          },

        ].map((song, index) => (
          <View key={index} style={styles.songCard}>
            <Image style={styles.songImage} source={{ uri: song.imageUri }} />
            <Text style={styles.songTitle}>{song.title}</Text>
          </View>
        ))}
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
    alignItems: 'start',
    justifyContent: 'space-between',
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
  albumInfo: {
    marginVertical: 15,
  },
  albumName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  albumRelease: {
    fontSize: 14,
    color: '#AFAFAF',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 8,
  },
  grid: {
    padding: 15,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  songCard: {
    width: '100',
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  songImage: {
    width: 120,
    aspectRatio: 1,
    borderRadius: 8,
  },
  songTitle: {
    marginTop: 5,
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default AlbumScreen;
