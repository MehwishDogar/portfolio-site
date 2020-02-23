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
import { loadSkills } from './actions';
import { makeSelectSkills } from './selector';

const key = 'skillsPage';

// eslint-disable-next-line no-shadow, no-unused-vars
function SkillsPage({ loading, error, skills, loadSkills }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    loadSkills('Mehwish');
  }, []);

  return (
    <Screen>
      {skills.map(skill => (
        <ProgressBar name={skill.name} percentage={skill.percentage} />
      ))}

      <CenteredParagraph />
    </Screen>
  );
}

SkillsPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  skills: PropTypes.array,
  loadSkills: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  skills: makeSelectSkills(),
});

const mapDispatchToProps = {
  loadSkills,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SkillsPage);
