import { ExperienceApi } from "../../../constants/api";

const experienceApi = new ExperienceApi();

export const FETCH_EXPERIENCES = 'FETCH_EXPERIENCES';

export const fetchLocationExperiences = () => ({
  type: FETCH_EXPERIENCES,
  payload:  experienceApi.fetchLocationExperiences()
});
