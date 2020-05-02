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
import { configData } from '../App/saga';
// eslint-disable-next-line import/named
import { loadTimeLine, loadParagraph } from './action';
import { loadtimeline, loadparagraph } from './selector';
import { addConfig } from '../App/actions';
import { selectConfig } from '../App/selectors';

const key = 'AboutmePage';

// eslint-disable-next-line no-shadow
function AboutmePage({
  timeline,
  loadTimeLine,
  paragraph,
  loadParagraph,
  config,
  addConfig,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useInjectSaga({ key: `${key}/config`, saga: configData });
  useEffect(() => {
    loadTimeLine();
    addConfig();
  }, []);

  return (
    <Screen>
      <Avatar thumbnail={config.user_thumbnail} />
      <CenteredParagraph paragraph={paragraph || config.about_paragraph} />
      {timeline.length > 0 && (
        <AboutmeTabs timeline={timeline} loadParagraph={loadParagraph} />
      )}
    </Screen>
  );
}

AboutmePage.propTypes = {
  timeline: PropTypes.array,
  loadTimeLine: PropTypes.func,
  loadParagraph: PropTypes.func,
  paragraph: PropTypes.string,
  config: PropTypes.object,
  addConfig: PropTypes.func,
};

const mapStatToProps = createStructuredSelector({
  timeline: loadtimeline(),
  paragraph: loadparagraph(),
  config: selectConfig(),
});

const mapDispatchToProps = {
  loadTimeLine,
  loadParagraph,
  addConfig,
};

const withConnect = connect(
  mapStatToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AboutmePage);
