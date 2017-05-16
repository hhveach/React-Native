import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

  state = { albums: [] };

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(apiResponse => this.setState({albums: apiResponse.data}));
  }

  makeAlbumsList(){
    return this.state.albums.map(singleAlbum => <Text key={singleAlbum.title}>{singleAlbum.title}</Text>);
  }

  render() {
    console.log(this.state);
    return (
      <View>
        {this.makeAlbumsList()}
      </View>
    );
  }
}

export default AlbumList;
