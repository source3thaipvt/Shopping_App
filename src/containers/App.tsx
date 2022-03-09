/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import fonts from '../res/fonts';
import images from '../res/images';
import React, {FC} from 'react';
import type {ReactNode} from 'react';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
interface Props {
  children: any;
  title: any;
}
import SplashScreen from './screens/SplashScreen';

const App: () => ReactNode = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? Colors.darker
      : Colors.lighter,
  };
  const showAlert = () => {
    Alert.alert('You show alert', 'Day la show stirng');
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={
          isDarkMode ? 'light-content' : 'dark-content'
        }
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={[styles.container, backgroundStyle]}>
          <SplashScreen />
          <Text
            style={{
              fontFamily: fonts.Helveticaneu700,
            }}>
            The are fonts
          </Text>
          <Image
            source={images.bg_scan3x}
            style={{
              resizeMode: 'cover',
              width: '90%',
              height: 400,
            }}></Image>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'red',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
