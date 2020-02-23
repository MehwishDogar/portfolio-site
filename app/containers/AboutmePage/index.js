import React from 'react';
import Screen from 'components/Screen';
import Avatar from 'components/Avatar';
import CenteredParagraph from 'components/CenteredParagraph';
import AboutmeTabs from 'components/AboutmeTabs';

export function AboutmePage() {
  return (
    <Screen>
      <Avatar />
      <CenteredParagraph />
      <AboutmeTabs />
    </Screen>
  );
}
