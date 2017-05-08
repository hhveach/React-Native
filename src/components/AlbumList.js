import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

  componentWillMount(){
    // console.log('working');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(apiResponse => console.log(apiResponse.data));
  }

  render() {
    return (
      <View>
        <Text>Albums Lists!!</Text>
      </View>
    );
  };
}

export default AlbumList;
