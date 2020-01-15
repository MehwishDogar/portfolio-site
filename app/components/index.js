import React from 'react';
import A from './A';
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import ListItem from './ListItem';
import LoadingIndicator from './LoadingIndicator';
import ReposList from './ReposList';
import Toggle from './Toggle';
import MainMenu from './MainMenu';
import LinkedButton from './linkedButton';
import SocialIcons from './SocialIcons';
import ProgressBar from './ProgressBar';
import CenteredParagraph from './CenteredParagraph';
import ThinH1 from './ThinH1';
import Avatar from './Avatar';
import AboutmeTabs from './AboutmeTabs';

const allComponents = () => (
  <div>
    <SocialIcons />
    <MainMenu />
    <LinkedButton />
    <Avatar />
    <A />
    <ThinH1 />
    <H1>Single-Page Applications</H1>
    <CenteredParagraph />
    <AboutmeTabs />
    <H2>Heading2</H2>
    <H3>Heading3</H3>
    <ProgressBar />
    <ListItem />
    <LoadingIndicator />
    <ReposList />
    <Toggle />
  </div>
);

export { allComponents };
