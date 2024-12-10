import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { WebView } from 'react-native-webview';

type MapUrls = {
  default: string;
  aj: string;
  danny: string;
  ravi: string;
  laila: string;
  ravali: string;
};

const mapUrls: MapUrls = {
  default: "https://www.google.com/maps/d/u/0/embed?mid=10dy73CJ7IhXThayOza8p63nkw8gMk34&ehbc=2E312F&noprof=1",
  aj: "https://www.google.com/maps/d/u/0/embed?mid=1c6KK4nSXV24NNm1sf28p2jQBdnuK1BU&ehbc=2E312F",
  danny: "https://www.google.com/maps/d/u/0/embed?mid=1RO6EP53uqwRMyJJ0P_NX00QACo7ao8E&ehbc=2E312F",
  ravi: "https://www.google.com/maps/d/u/0/embed?mid=1goWVfoOta9-NYcR-wPXrYP2hpjfpUeQ&ehbc=2E312F",
  laila: "https://www.google.com/maps/d/u/0/embed?mid=1ZTx-Fyg3r10tvzybD9cur5tI9oc1quA&ehbc=2E312F",
  ravali: "https://www.google.com/maps/d/u/0/embed?mid=1O_AUjp_GGBMyYeOVnQqo9ji4lbiwa8U&ehbc=2E312F"
};

const Map = () => {
  const [mapUrl, setMapUrl] = useState<string>(mapUrls.default);

  const updateMap = (key: keyof MapUrls) => {
    setMapUrl(mapUrls[key]);
  };

  const MapButtons = () => (
    <View style={styles.buttonContainer}>
      {(Object.keys(mapUrls) as Array<keyof MapUrls>).map((key) => (
        <TouchableOpacity
          key={key}
          style={styles.button}
          onPress={() => updateMap(key)}
        >
          <Text style={styles.buttonText}>{key.toUpperCase()}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Interactive Map</Text>
        <View style={styles.mapContainer}>
          <iframe
            src={mapUrl}
            style={styles.webMap}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </View>
        <MapButtons />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interactive Map</Text>
      <View style={styles.mapContainer}>
        <WebView
          source={{ uri: mapUrl }}
          style={styles.nativeMap}
        />
      </View>
      <MapButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  } as const,
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  } as const,
  mapContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  } as const,
  webMap: {
    width: '100%',
    height: '100%',
    border: 'none',
  } as const,
  nativeMap: {
    flex: 1,
  } as const,
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  } as const,
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    minWidth: 70,
    alignItems: 'center',
  } as const,
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  } as const,
});

export default Map;
