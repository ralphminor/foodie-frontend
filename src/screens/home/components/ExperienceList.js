import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from './styles/experienceList';
import StarRating from 'react-native-star-rating';

var dateFormat = require('dateformat');

const ExperienceList = ({ experience }) => (
  <View style={styles.root}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>My Recent Ratings</Text>
    </View>
    <View style={styles.contentContainer}>
      <ScrollView vertical>
        {experience.map((experience, i) => (
          <View key={i} style={styles.experienceCard}>
            <View style={styles.experienceCardTopContainer}>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 2, flexDirection: 'column' }}>
                  <Image
                    style={{width: 150, height: 150}}
                    source={{uri: experience.imgUrl}}
                    />
                </View>
                <View style={{ flex: 3, flexDirection: 'column', paddingLeft: 10, paddingRight: 10}}>
                  <Text style={{color: "gold", paddingTop: 3 }}>
                    {experience.itemName}
                  </Text>
                  <Text style={{color: "white" }}>
                    {`Description: `}{experience.description}
                  </Text>
                  <View style={{flexDirection: 'row', height: 90}}>
                    <Text style={{width: 95, height: 30, color: "white" }}>
                    {`My Rating: `}
                    </Text>
                    <StarRating
                      starColor={"gold"}
                      starSize={25}
                      rating={experience.rating}
                      selectedStar={(rating) => {}}
                    />
                  </View>
                </View>
              </View>
            </View>



            <View style={styles.experienceCardBottomContainer}>
              <Text style={styles.experienceCardMetaName}>
                {`Location: `}{experience.location.name}
              </Text>
              <Text style={styles.experienceCardMetaDate}>

                {dateFormat(experience.createdAt)}
              </Text>
            </View>

          </View>
        ))}
      </ScrollView>
    </View>
  </View>
);

export default ExperienceList;
