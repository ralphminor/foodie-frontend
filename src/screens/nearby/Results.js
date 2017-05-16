import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ListView, Linking, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import Search from './Search';
import { Navigator } from 'react-native';
import styles from './styles/NearbyScreen';
import StarRating from 'react-native-star-rating';

class NearbyScreen extends Component {

  constructor(props) {
    super(props)
    var dataStore = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      results: dataStore.cloneWithRows(props.data.businesses)
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: "black" }}>
        <View>
          <Text style={{ color: 'white', fontSize: 25, fontFamily: 'montserratBold', paddingVertical: '2%' }}>Restaurants Nearby</Text>
        </View>
        <ListView

          initialListSize={10}
          dataSource={this.state.results}
          renderRow={(result) => { return this.renderResult(result) }} />
      </View>
    );
  }

  renderResult(result) {
    let dist = (result.distance / 1609).toFixed(1);

    return (
      <TouchableOpacity onPress={() => {state.locationName=result.name; state.locationId=result.id}}>
        <View>
          <View style={styles.resultRow}>
            <View style={{ flex: 2, flexDirection: 'column' }}>
              <Image source={{uri: result.image_url}}
                style={{width: 120, height: 120, justifyContent: 'flex-start'}} />
            </View>
            <View style={{ flex: 4, flexDirection: 'column', justifyContent: 'flex-start'}}>
              <Text style={styles.title}>{`${result.name}`}</Text>
              <View style={{flexDirection: 'row', height: 30, paddingTop: 5}}>
                <Text style={{width: 95, height: 30, color: "gold"}}>
                  {`Yelp Rating: `}
                </Text>
                <StarRating
                  starColor={"gold"}
                  starSize={18}
                  rating={result.rating}
                  selectedStar={(rating) => {}}
                />
              </View>
              <Text style={{color: 'white'}}>Reviews: {`${result.review_count}`}</Text>
              <Text style={{color: 'white'}}>Phone: {`${result.display_phone}`}</Text>
              <Text style={{color: 'white'}}>Distance: {`${dist} mi`}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

}




export default NearbyScreen;