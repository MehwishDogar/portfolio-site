import {
  LOAD_CONTACTS,
  LOAD_CONTACTS_SUCCESS,
  LOAD_CONTACTS_ERROR,
  ADD_CONTENT,
  LOAD_CONTENT_SUCCESS,
  LOAD_CONTENT_ERROR,
} from './constant';

/**
 * @return {object} An action object with the type of LOAD_CONTACTS
 * @param {object} contact The current object
 */

export function loadContacts(contact) {
  return {
    type: LOAD_CONTACTS,
    contact,
  };
}

/**
 *  @param {array} contact the contacts data
 *  @return {object} An action object with the type of LOAD_CONTACTS_SUCCESS passing the contact
 *
 */

export function contactsLoaded(contact) {
  return {
    type: LOAD_CONTACTS_SUCCESS,
    contact,
  };
}

/**
 *
 *  @param {object} error The error
 *  @return {object} An action object with the type of LOAD_CONTACTS_ERROR passing the error
 */

export function contactsLoadingError(error) {
  return {
    type: LOAD_CONTACTS_ERROR,
    error,
  };
}

/**
 * @return {object} An action object with the type of ADD_CONTENT
 * @param {object} content The current object
 */

export function addContent(content) {
  return {
    type: ADD_CONTENT,
    content,
  };
}

/**
 *  @param {object} content the content data
 *  @return {object} An action object with the type of LOAD_CONTENT_SUCCESS passing the content
 *
 */

export function contentLoaded(content) {
  return {
    type: LOAD_CONTENT_SUCCESS,
    content,
  };
}

/**
 *
 *  @param {object} error The error
 *  @return {object} An action object with the type of LOAD_CONTENT_ERROR passing the error
 */

export function contentLoadingError(error) {
  return {
    type: LOAD_CONTENT_ERROR,
    error,
  };
}
