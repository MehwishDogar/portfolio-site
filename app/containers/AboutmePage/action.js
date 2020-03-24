import {
  LOAD_TIMELINE,
  LOAD_TIMELINE_SUCCESS,
  LOAD_TIMELINE_ERROR,
  LOAD_PARAGRAPH,
} from './constant';

/**
 * @return {object} An action object with the type of ADD_TIMELINE
 * @param {object} timeline The current object
 * @param {string} username The current username
 */

export function loadTimeLine(timeline, username) {
  return {
    type: LOAD_TIMELINE,
    timeline,
    username,
  };
}

/**
 *  @param {array} timeline the timeline data
 *  @return {object} An action object with the type of LOAD_TIMELINE_SUCCESS passing the timeline
 *
 */

export function timelineLoaded(timeline) {
  return {
    type: LOAD_TIMELINE_SUCCESS,
    timeline,
  };
}

/**
 *
 *  @param {object} error The error
 *  @return {object} An action object with the type of LOAD_TIMELINE_ERROR passing the error
 */

export function timelineLoadingError(error) {
  return {
    type: LOAD_TIMELINE_ERROR,
    error,
  };
}

/**
 *
 * @param {object} timeline
 * @return {object}
 */

export function loadParagraph(timeline) {
  return {
    type: LOAD_PARAGRAPH,
    timeline,
  };
}
