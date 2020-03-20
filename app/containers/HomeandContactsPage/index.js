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
import { selectContacts, selectContent } from './selector';
import saga from './saga';
import { loadContacts, addContent } from './actions';
import reducer from './reducer';

const key = 'HomeandContactsPage';

function HomeandContactsPage({ contact, loadContacts, content, addContent }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    loadContacts();
    addContent();
  }, []);

  return (
    <Screen>
      <ThinH1 />
      <H1>Single-Page Applications</H1>
      <CenteredParagraph paragraph={content.Home_paragraph} />
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
  content: PropTypes.object,
  addContent: PropTypes.func,
};

const mapStatToProps = createStructuredSelector({
  contact: selectContacts(),
  content: selectContent(),
});

const mapDispatchToProps = {
  loadContacts,
  addContent,
};

const withConnect = connect(
  mapStatToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomeandContactsPage);
