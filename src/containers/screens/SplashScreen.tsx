import React, {useState} from 'react';
import {
  useColorScheme,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function SplashScreen() {
  const {container} = styles;
  return (
    <View style={container}>
      <Text>Ahihi</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    opacity: 0.3,
  },
});
