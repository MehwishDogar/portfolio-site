/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';

import SkillsPage from 'containers/SkillsPage';
import TextinBubble from 'components/TextinBubble';
import Robotic from 'components/Robotic';
import { addConfig } from './actions';
import { configData } from './saga';
import { selectConfig } from './selectors';
import reducer from './reducer';
import GlobalStyle from '../../global-styles';
import { allComponents } from '../../components';
import HomeandContactsPage from '../HomeandContactsPage';
import AboutmePage from '../AboutmePage';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const key = 'App';

function App({ config }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key: `${key}/config`, saga: configData });
  useEffect(() => {
    addConfig();
  }, []);

  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="PORTFOLIO-SITE"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeandContactsPage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/aboutme" component={AboutmePage} />
        <Route path="/components" component={allComponents} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Robotic roboticImg={config.robot_image} />
      <TextinBubble />
      <GlobalStyle />
    </AppWrapper>
  );
}

App.propTypes = {
  config: PropTypes.object,
};

const mapStatToProps = createStructuredSelector({
  config: selectConfig(),
});

const mapDispatchToProps = {
  addConfig,
};

const withConnect = connect(
  mapStatToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(App);
