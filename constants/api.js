import axios from 'axios';
import { Platform } from 'react-native';

let url;
url = 'https://foodie-deployed.herokuapp.com/api/';
axios.defaults.baseURL = url;

class ExperienceApi {
  constructor() {
    this.locationId = fakeLocationId;
    this.path = `/locations/${this.locationId}/experiences`;
  }

  async fetchLocationExperiences() {
    try {
      this.path = `/experiences`;
      const { data } = await axios.get(this.path);
      console.log(`data.experiences `, data.experiences);
      data.experiences.sort(function(a,b) {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      });

      // data.experiences.forEach((e) => {
      //   console.log(`array createdAt: `, e.createdAt-'2017-04-06T03:01:43.391Z');
      // })
      //data.experiences.sort(function(a, b){return b.createdAt - a.createdAt});
      console.log(`data.experiences after sort: `, data.experiences);
      return data.experiences;

    } catch (e) {
      console.log(e);
    }
  }

  async createLocationExperience(args) {
    try {
      const res = await axios.post(`${this.path}/new`, { ...args });

      return res;
    } catch (e) {
      console.log(e);
    }
  }
}

export {
  ExperienceApi
};
