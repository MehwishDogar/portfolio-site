import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { produce } from 'immer';
import StyledAboutmeTabs from './StyledAboutmeTabs';

const AboutmeTabs = ({ timeline, loadParagraph }) => {
  const [items, setItems] = useState(timeline);

  const handleItems = (item, index) => {
    setItems(
      produce(draftItems => {
        const selectedItem = draftItems[index];
        selectedItem.class = 'active';
        draftItems.slice(0, index).forEach(prevItem => {
          // eslint-disable-next-line no-param-reassign
          prevItem.class = 'done';
        });
        draftItems.slice(index + 1).forEach(nextItem => {
          // eslint-disable-next-line no-param-reassign
          nextItem.class = 'next';
        });
      }),
    );
    loadParagraph(item);
  };

  return (
    <StyledAboutmeTabs>
      {items.map((item, index) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <span
          className={
            item.class === undefined && index === 0
              ? `timeline active`
              : `timeline ${item.class}`
          }
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
