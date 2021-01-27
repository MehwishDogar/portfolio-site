/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { FiChevronDown } from 'react-icons/fi';
import StyledLinkedbutton from './StyledLinkedbutton';
import { parseQueryParam } from '../../utils/globalHelper';

const linkedButton = ({ contacts, location }) => {
  const mainContact =
    contacts.find(contact => contact.name === parseQueryParam(location).site) ||
    contacts[0];
  return (
    <StyledLinkedbutton>
      <a className="button" href={mainContact.url} target="_blank">
        Hire me on {mainContact.name}
      </a>
      <div className="dropdown">
        <FiChevronDown />
        <div>
          {contacts.map(contact => (
            <a href={contact.url} target="_blank">
              {contact.name}
            </a>
          ))}
        </div>
      </div>
    </StyledLinkedbutton>
  );
};

linkedButton.propTypes = {
  contacts: PropTypes.array,
  location: PropTypes.object,
};

export default linkedButton;
