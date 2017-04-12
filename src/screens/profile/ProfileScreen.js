import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';

class ProfileScreen extends Component {
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

    return { style, title };
  },
  tabBar: {
    icon: ({ tintColor }) => (
      <MaterialIcons
        name="person"
        size={25}
        color={tintColor}
      />
    )
  }
}
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <Text style={{ color: "white" }}>My Profile</Text>
      </View>
    );
  }
}

export default ProfileScreen;
