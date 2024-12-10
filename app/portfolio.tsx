import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';

const Portfolio = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* About Section */}
      <View style={styles.aboutSection}>
        <Text style={styles.heading}>About the Projects</Text>
        <Text style={styles.paragraph}>
          This portfolio showcases our group's projects. Below are details about the work we did together on two projects: HangBot and Cooking Buddy.
        </Text>
      </View>

      {/* Project Section */}
      <View style={styles.projectContainer}>
        {/* HangBot Project */}
        <View style={[styles.projectBox, styles.hangbot]}>
          <Text style={styles.projectTitle}>HangBot</Text>
          <Text style={styles.paragraph}>
            HangBot is a word guessing game where players must guess a hidden word, which can be 3 to 6 letters long. Each incorrect guess adds a part of a bot's body. If all parts are added before the correct word is guessed, the bot gets "hanged." If the player guesses the word correctly, the bot is saved.
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL('/HangMan/index.html')}
            style={styles.linkButton}
          >
            <Text style={styles.linkText}>Play HangBot</Text>
          </TouchableOpacity>
        </View>

        {/* Cooking Buddy Project */}
        <View style={[styles.projectBox, styles.cookingBuddy]}>
          <Text style={styles.projectTitle}>Cooking Buddy</Text>
          <Text style={styles.paragraph}>
            Cooking Buddy is a recipe generator app that suggests recipes based on the ingredients available at the user's home. It provides additional features such as generating recipes from random cuisines, saving favorite recipes, displaying top editor’s picks, and customizing recipes based on user preferences and allergy settings.
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL('/Cookingbuddy.pdf')}
            style={styles.linkButton}
          >
            <Text style={styles.linkText}>View Cooking Buddy Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  aboutSection: {
    marginBottom: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
    color: '#333',
    marginBottom: 20,
  },
  projectContainer: {
    flex: 1,
  },
  projectBox: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  projectTitle: {
    margin: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 10,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center', // Centers the button horizontally if the container is larger
    width: 'auto', // Ensures the width adjusts to content
  },
  linkText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  hangbot: {
    backgroundColor: '#e3f2fd',
  },
  cookingBuddy: {
    backgroundColor: '#f1f8e9',
  },
});

export default Portfolio;
