import React, { Component } from 'react';
import { Button, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import { CreateExperienceForm } from './components';
import { LoadingScreen } from '../../commons';
import { createExperience } from './actions';
import Colors from '../../../constants/Colors';
import styles from './styles/CreateExperienceScreen';
import { ImagePicker } from 'expo';

@connect(
  state => ({
    experience: state.createExperience
  }),
  { createExperience }
)
export default class CreateExperienceScreen extends Component {
  static navigationOptions = {
    title: 'Save a new rating...',
    header: ({ goBack }) => {
      const style = { backgroundColor: Colors.blackColor };

      const titleStyle = { color: Colors.whiteColor };

      const left = (
        <TouchableOpacity style={styles.iconClose} onPress={() => goBack()}>
          <MaterialIcons
            name="close"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      );

      return { style, titleStyle, left };
    }
  }

  state = {
    isDateTimePickerVisible: false,
    date: moment(),
    image: null,
    starCount: 3.5
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

  _handleDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  _handleDatePicked = date => {
    this.setState({ date });
    this._handleDateTimePicker();
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  _checkTitle() {
    const { date } = this.state;
    if (date) {
      return moment(date).format('dddd, MMMM D, YYYY');
    }
    return 'Select the date';
  }

  _checkIfButtonSubmitDisabled() {
    const { date } = this.state;

    if (date > moment()) {
      return true;
    }
    return false;
  }

  _createExperience = async values => {
    console.log(`createExperience values are: `, values)
    await this.props.createExperience(values);
    this.props.navigation.goBack();
  }

  render() {
    let { image } = this.state;
    const {
      experience
    } = this.props;
    if (experience.isLoading) {
      return (
        <View style={styles.root}>
          <LoadingScreen />
        </View>
      );
    } else if (experience.error.on) {
      return (
        <View style={styles.root}>
          <Text>{experience.error.message}</Text>
        </View>
      );
    }
    return (
      <ScrollView vertical>
      <View style={styles.root}>
        <CreateExperienceForm
          createExperience={this._createExperience}
          showDateTimePicker={this._showDateTimePicker}
          image = {this.state.image}
          pickImage={this._pickImage}
          checkTitle={this._checkTitle()}
        />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._handleDateTimePicker}
          mode="date"
        />
      </View>
      </ScrollView>
    );
  }
}