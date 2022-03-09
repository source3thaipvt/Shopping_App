/* eslint-disable prettier/prettier */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/containers/App';
import Test from './src/containers/testLibary';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
