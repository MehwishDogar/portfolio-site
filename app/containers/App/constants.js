/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

/* export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR'; */

export const LOAD_MESSAGES = 'PORTFOLIO-SITE/APP/LOAD_MESSAGES';
export const LOAD_MESSAGES_SUCCESS = 'PORTFOLIO-SITE/APP/LOAD_MESSAGES_SUCCESS';
export const LOAD_MESSAGES_ERROR = 'PORTFOLIO-SITE/APP/LOAD_MESSAGES_ERROR';
export const ADD_MESSAGE = 'PORTFOLIO-SITE/APP/ADD_MESSAGE';
export const UPDATE_MESSAGE = 'PORTFOLIO-SITE/APP/UPDATE_MESSAGE';

// Default paragraph
export const ADD_CONFIG = 'PORTFOLIO-SITE/HomeandContactsPage/ADD_CONFIG';
export const LOAD_CONFIG_SUCCESS =
  'PORTFOLIO-SITE/HomeandContactsPage/LOAD_CONFIG_SUCCESS';
export const LOAD_CONFIG_ERROR =
  'PORTFOLIO-SITE/HomeandContactsPage/LOAD_CONFIG_ERROR';
