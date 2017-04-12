import React, { Component } from 'react';
import { Navigator, AppRegistry, View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import Colors from '../../../constants/Colors';
import Search from './Search'
import Results from './Results'
import styles from './styles/NearbyScreen';

class AppNavigator extends Component {

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
      <MaterialIcons
        name="my-location"
        size={25}
        color={tintColor}
      />
    )
  }
}
  renderScene(route, navigator) {
    if (!route) {
      var route = {};
      route.ident="Search";
    }

    var globalNavigatorProps = { navigator }

    switch(route.ident) {
      case "Search":
        return (
          <Search
            {...globalNavigatorProps} />
        )

      case "Results":
        return (
          <Results
            {...globalNavigatorProps}
            data = {route.data} />
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        renderScene={this.renderScene}
        configureScene={(route) => Navigator.SceneConfigs.FloatFromRight } />
    )
  }

}

module.exports = AppNavigator