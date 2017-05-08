import React from 'react';
import { Text, View, AppRegistry } from 'react-native';
import Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList.js';

const App = () =>  (
  <View>
    <Header headerText={'Albums'}/>
    <AlbumList/>
  </View>
);

AppRegistry.registerComponent('albums', () => App);
