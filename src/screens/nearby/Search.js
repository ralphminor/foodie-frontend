import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import OAuthSimple from 'oauthsimple'
import * as Expo from 'expo';
import { CONSUMER_KEY, CONSUMER_SECRET, TOKEN_SECRET, TOKEN } from 'react-native-dotenv';

class Search extends Component {

  async getLocationAsync() {
    const { Location, Permissions } = Expo;
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      var locObj = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
      let lat = locObj['coords'].latitude;
      let lon = locObj['coords'].longitude;
      this.location = locObj;
      return this.location;
    } else {
      throw new Error('Location permission not granted');
    }
  }

  fetchData() {
    var lat = this.location['coords'].latitude
    var lng = this.location['coords'].longitude
    lat = 39.757350
    lng = -105.007480
    var latlng = "ll=" + String(lat) + "," + String(lng)

    oauth = new OAuthSimple(CONSUMER_KEY, TOKEN_SECRET)
    request = oauth.sign({
      action: "GET",
      path: "https://api.yelp.com/v2/search",
      parameters: "term=restaurant&sort=1&limit=20&" + latlng,
      signatures: {api_key: CONSUMER_KEY, shared_secret: CONSUMER_SECRET, access_token: TOKEN, access_secret: TOKEN_SECRET},

    })

    var nav = this.props.navigator

    fetch(request.signed_url, {method: "GET"}).then(function(response){
      return response.json()
    }).then(function(data){
      nav.push({
        ident: "Results",
        data: data
      })
    }).catch(function(error){
      console.log("Error:", error)
    })

  }

  componentWillMount() {
    this.getLocationAsync();
  }

  render() {
    return (

      <View style={styles.container}>

        <Text style={styles.welcome}>

        </Text>

        <TouchableOpacity
          style={{borderRadius: 7,padding: 10,  backgroundColor: '#4d9be3'}}
          onPress={this.fetchData.bind(this)}>
          <Text style={{fontSize: 15}}>Touch to load nearby.</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    marginBottom: 30
  }
});

module.exports = Search
