import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Screen from 'components/Screen';
import ProgressBar from 'components/ProgressBar';
import CenteredParagraph from 'components/CenteredParagraph';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { configData } from '../App/saga';
import { loadSkills } from './actions';
import { addConfig } from '../App/actions';
import { makeSelectSkills } from './selector';
import { selectConfig } from '../App/selectors';

const key = 'skillsPage';

// eslint-disable-next-line no-shadow, no-unused-vars
function SkillsPage({ loading, error, skills, loadSkills, config, addConfig }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useInjectSaga({ key: `${key}/config`, saga: configData });
  useEffect(() => {
    loadSkills();
    addConfig();
  }, []);

  return (
    <Screen>
      {skills.map(skill => (
        <ProgressBar name={skill.name} percentage={skill.percentage} />
      ))}

      <CenteredParagraph paragraph={config.skills_paragraph} />
    </Screen>
  );
}

SkillsPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  skills: PropTypes.array,
  loadSkills: PropTypes.func,
  config: PropTypes.object,
  addConfig: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  skills: makeSelectSkills(),
  config: selectConfig(),
});

const mapDispatchToProps = {
  loadSkills,
  addConfig,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SkillsPage);
