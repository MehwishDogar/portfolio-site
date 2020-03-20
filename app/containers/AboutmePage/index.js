/* eslint-disable no-redeclare */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Screen from 'components/Screen';
import Avatar from 'components/Avatar';
import CenteredParagraph from 'components/CenteredParagraph';
import AboutmeTabs from 'components/AboutmeTabs';
import reducer from './reducer';
import saga from './saga';
// eslint-disable-next-line import/named
import { loadTimeLine, loadParagraph } from './action';
import { loadtimeline, loadparagraph } from './selector';

const key = 'AboutmePage';

// eslint-disable-next-line no-shadow
function AboutmePage({ timeline, loadTimeLine, paragraph, loadParagraph }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    loadTimeLine();
  }, []);

  return (
    <Screen>
      <Avatar />
      <CenteredParagraph paragraph={paragraph} />
      {timeline.map(timeline => (
        <AboutmeTabs
          name={timeline.name}
          onClick={e => loadParagraph(timeline)}
        />
      ))}
    </Screen>
  );
}

AboutmePage.propTypes = {
  timeline: PropTypes.array,
  loadTimeLine: PropTypes.func,
  loadParagraph: PropTypes.func,
  paragraph: PropTypes.string,
};

const mapStatToProps = createStructuredSelector({
  timeline: loadtimeline(),
  paragraph: loadparagraph(),
});

const mapDispatchToProps = {
  loadTimeLine,
  loadParagraph,
};

const withConnect = connect(
  mapStatToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AboutmePage);
