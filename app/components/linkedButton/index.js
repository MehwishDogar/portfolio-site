/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { FiChevronDown } from 'react-icons/fi';
import StyledLinkedbutton from './StyledLinkedbutton';

const linkedButton = ({ contacts }) => (
  <StyledLinkedbutton>
    Hire me on <FiChevronDown />
    <div>
      {contacts.map(contact => (
        <a href={contact.url} target="_blank">
          {contact.name}
        </a>
      ))}
    </div>
  </StyledLinkedbutton>
);

linkedButton.propTypes = {
  contacts: PropTypes.array,
};

export default linkedButton;
