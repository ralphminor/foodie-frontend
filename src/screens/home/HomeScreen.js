import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import { LoadingScreen } from '../../commons';
import { ExperienceList } from './components';

import { fetchLocationExperiences } from './actions';
// import { getLocationAsync } from './actions';
import styles from './styles/HomeScreen';
import Colors from '../../../constants/Colors';
import * as Expo from 'expo';
//import Expo, { AppLoading } from 'expo';
import { Components } from 'expo';

@connect(
  state => ({
    experiences: state.home.experiences
  }),
  { fetchLocationExperiences }
)

class HomeScreen extends Component {
  static navigationOptions = {
    header: ({ navigate }) => {
      const style = { backgroundColor: Colors.blackColor };

      const title = (
        <View>
            <Text style={{
              fontSize: 60,
              fontFamily: "mrdafoeReg",
              color: Colors.whiteColor
            }}> Foodie
          </Text>
        </View>
      );

      const right = (
        <TouchableOpacity style={styles.iconAdd} onPress={() => navigate('CreateExperience')}>
          <MaterialIcons
            name="add-circle"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      );

      return { style, title, right };
    },
    tabBar: {
      icon: ({ tintColor }) => (
        <FontAwesome
          name="home"
          size={25}
          color={tintColor}
        />
      )
    }
  }

  async getLocationAsync() {
    const { Location, Permissions } = Expo;
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      var locObj = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
      //console.log(`Location info new: `,locObj['coords'].longitude);
      let lat = locObj['coords'].latitude;
      let lon = locObj['coords'].longitude;
      this.location = locObj;
      return this.location;
    } else {
      throw new Error('Location permission not granted');
    }
  }

  componentDidMount() {
    this.props.fetchLocationExperiences();
    this.getLocationAsync();
  }

  render() {

    let receivedLocation = this.location;
    if (receivedLocation) {
    const {
      experiences: {
        isFetched,
        data,
        error
      }
    } = this.props;
    if (!isFetched) {
      return <LoadingScreen />;
    } else if (error.on) {
      return (
        <View>
          <Text>{error.message}</Text>
        </View>
      );

    }
    return (
      <View style={styles.root}>
        <View style={styles.bottomContainer}>
          <ExperienceList experiences={data} />
        </View>
      </View>
    )} else {
      return <LoadingScreen />;
    }
  }
}

export default HomeScreen;
