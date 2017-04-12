import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';

import { TextInputWithValidations } from '../../../commons';
import { createExperienceValidations } from '../validations';
import Colors from '../../../../constants/Colors';
import styles from './styles/CreateExperienceForm';
import StarRating from 'react-native-star-rating';

this.state = {
      starCount: 3,
    };

const CreateExperienceForm = ({
  createExperience,
  checkTitle,
  showDateTimePicker,
  handleSubmit,
  invalid,
  submitting,
  image,
  pickImage
}) => (
  <View style={styles.container}>
    <View style={styles.container}>
      <View style={{ marginTop: 5, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          color="white"
          backgroundColor="blue"
          title="Add An Image"
          onPress={pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ borderRadius: 15, marginTop: 10, width: 200, height: 200 }} />}
      </View>
      </View>
    <Field
      component={TextInputWithValidations}
      name="Location"
      label="Location"
      placeholder={this.state.locationName}
      selectionColor={Colors.redColor}
      containerStyle={styles.item}
    />
    <Field
      component={TextInputWithValidations}
      name="itemName"
      label="Item Name"
      selectionColor={Colors.redColor}
      containerStyle={styles.item}
    />
    <Field
      component={TextInputWithValidations}
      name="description"
      label="Description"
      multiline
      selectionColor={Colors.redColor}
      containerStyle={styles.item}
    />
    <Field
      component={TextInputWithValidations}
      name="rating"
      label="My Rating"
      selectionColor={Colors.redColor}
      containerStyle={styles.item}
    />
    <View style={styles.item}>
      <Button
        raised
        fontFamily="montserrat"
        onPress={showDateTimePicker}
        title={checkTitle}
      />
    </View>
    <View style={styles.buttonCreate}>
      <Button
        backgroundColor={Colors.blackBlueColor}
        title="Save"
        raised
        fontFamily="montserrat"
        disabled={invalid || submitting}
        onPress={handleSubmit(createExperience)}
      />
    </View>
  </View>
);

export default reduxForm({
  form: 'createExperience',
  validate: createExperienceValidations
})(CreateExperienceForm);