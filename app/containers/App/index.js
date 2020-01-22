/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';

import { SkillsPage } from 'containers/SkillsPage';
import TextinBubble from 'components/TextinBubble';
import Roboticgirl from 'components/Roboticgirl';
import GlobalStyle from '../../global-styles';
import { allComponents } from '../../components';
import { HomeandContactsPage } from '../HomeandContactsPage';
import { AboutmePage } from '../AboutmePage';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
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
      <TextinBubble />
      <Roboticgirl />
      <GlobalStyle />
    </AppWrapper>
  );
}
