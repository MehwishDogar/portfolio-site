import {
  LOAD_CONTACTS,
  LOAD_CONTACTS_SUCCESS,
  LOAD_CONTACTS_ERROR,
  LOAD_URL,
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
 * @return {object} An action object with the type of LOAD_CONTACTS
 * @param {object} contact The current object
 */

export function loadUrl(contact) {
  return {
    type: LOAD_URL,
    contact,
  };
}
