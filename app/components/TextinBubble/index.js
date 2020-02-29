import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectMessage } from 'containers/App/selectors';
import saga from 'containers/App/saga';
import reducer from 'containers/App/reducer';
import { loadMessages } from 'containers/App/actions';
import { PropTypes } from 'prop-types';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import StyledTextinBubble from './StyledTextinBubble';

const key = 'TextinBubble';

// eslint-disable-next-line no-shadow
function TextinBubble({ message, loadMessages }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    loadMessages();
  }, []);

  return <StyledTextinBubble>{message}</StyledTextinBubble>;
}
TextinBubble.propTypes = {
  message: PropTypes.string,
  loadMessages: PropTypes.func,
};

const mapStatToProps = createStructuredSelector({
  message: selectMessage(),
});

const mapDispatchToProps = {
  loadMessages,
};

const withConnect = connect(
  mapStatToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TextinBubble);
