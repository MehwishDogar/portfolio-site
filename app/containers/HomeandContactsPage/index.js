/* eslint-disable no-shadow */
import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Screen from 'components/Screen';
import ThinH1 from 'components/ThinH1';
import H1 from 'components/H1';
import CenteredParagraph from 'components/CenteredParagraph';
import SocialIcons from 'components/SocialIcons';
import LinkedButton from 'components/linkedButton';
import { selectContacts } from './selector';
import { selectConfig } from '../App/selectors';
import saga from './saga';
import { configData } from '../App/saga';
import { loadContacts } from './actions';
import { addConfig } from '../App/actions';
import reducer from './reducer';

const key = 'HomeandContactsPage';

function HomeandContactsPage({ contact, loadContacts, config, addConfig }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useInjectSaga({ key: `${key}/config`, saga: configData });
  useEffect(() => {
    loadContacts();
    addConfig();
  }, []);

  return (
    <Screen>
      <H1 title={config.title} />
      <ThinH1 secondaryTitle={config.secondary_title} />
      <CenteredParagraph paragraph={config.home_paragraph} />
      {contact
        .filter(contact => contact.logo)
        .map(contact => (
          <SocialIcons logo={contact.logo} url={contact.url} />
        ))}
      or
      <LinkedButton contacts={contact.filter(contact => !contact.logo)} />
    </Screen>
  );
}

HomeandContactsPage.propTypes = {
  contact: PropTypes.array,
  loadContacts: PropTypes.func,
  config: PropTypes.object,
  addConfig: PropTypes.func,
};

const mapStatToProps = createStructuredSelector({
  contact: selectContacts(),
  config: selectConfig(),
});

const mapDispatchToProps = {
  loadContacts,
  addConfig,
};

const withConnect = connect(
  mapStatToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomeandContactsPage);
