import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { cloneDeep } from 'lodash';
import { produce } from 'immer';
import StyledAboutmeTabs from './StyledAboutmeTabs';

import { setClassName } from './helper';

const getItems = items => {
  if (items.length > 0) {
    setClassName(items, 0);
  }
  return items;
};

const AboutmeTabs = ({ timeline, loadParagraph }) => {
  const [items, setItems] = useState(getItems(cloneDeep(timeline)));

  const handleItems = (item, index) => {
    setItems(
      produce(draftItems => {
        setClassName(draftItems, index);
      }),
    );
    loadParagraph(item);
  };

  return (
    <StyledAboutmeTabs>
      {items.map((item, index) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <span
          className={item.className}
          onClick={() => handleItems(item, index)}
        >
          {item.name}
        </span>
      ))}
    </StyledAboutmeTabs>
  );
};

AboutmeTabs.propTypes = {
  timeline: PropTypes.array,
  loadParagraph: PropTypes.func,
};

export default AboutmeTabs;
