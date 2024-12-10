import { Stack } from "expo-router";
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Image, Button } from 'react-native';
import { NavButtons } from '@/components/NavButtons'
import * as Font from 'expo-font';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import styles from '../styles';

function LogoTitle() {
  return (
    <Image source={require("../assets/images/logo3.png")} />
  )
}


export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Roboto_400Regular,
        Roboto_700Bold
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  
  return (
    <Stack 
      screenOptions={{
        headerStyle: { backgroundColor: styles.navbar.backgroundColor },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitle: () => <LogoTitle />,
        headerRight: () =>  <NavButtons />,
      }}
    />
  );
}
