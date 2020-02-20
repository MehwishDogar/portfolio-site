import {
  LOAD_SKILLS,
  LOAD_SKILLS_SUCCESS,
  LOAD_SKILLS_ERROR,
} from './constants';

/**
 * Load the skils, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_SKILLS
 * @param  {string} username The current username
 */

export function loadSkills(username) {
  return {
    type: LOAD_SKILLS,
    username,
  };
}

/**
 * Dispatched when the skills are loaded by the request saga
 *
 * @param  {array} skills The skills data
 *
 * @return {object}      An action object with a type of LOAD_SKILLS_SUCCESS passing the skills
 */
export function skillsLoaded(skills) {
  return {
    type: LOAD_SKILLS_SUCCESS,
    skills,
  };
}

/**
 * Dispatched when loading the skills fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_SKILLS_ERROR passing the error
 */
export function skillLoadingError(error) {
  return {
    type: LOAD_SKILLS_ERROR,
    error,
  };
}
