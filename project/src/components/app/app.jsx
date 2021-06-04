import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

function App({hotels}) {
  return (
    <MainPage hotels={hotels}/>
  );
}

App.defaultProps = {
  data: []
};

App.propTypes = {
  data: PropTypes.array,
};

export default App;
