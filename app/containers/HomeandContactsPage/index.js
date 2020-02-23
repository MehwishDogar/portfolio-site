import React from 'react';
import Screen from 'components/Screen';
import ThinH1 from 'components/ThinH1';
import H1 from 'components/H1';
import CenteredParagraph from 'components/CenteredParagraph';
import SocialIcons from 'components/SocialIcons';
import LinkedButton from 'components/linkedButton';

export function HomeandContactsPage() {
  return (
    <Screen>
      <ThinH1 />
      <H1>Single-Page Applications</H1>
      <CenteredParagraph />
      <SocialIcons /> or <LinkedButton />
    </Screen>
  );
}
