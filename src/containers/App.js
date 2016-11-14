/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {} from '../actions/';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Main from '../components/App';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, highPressure, lowPressure} = this.props;
    return (<Main actions={actions} highPressure={highPressure} lowPressure={lowPressure} />
    );
  }
}

App.propTypes = {
  actions: PropTypes.object,
  highPressure: PropTypes.number,
  lowPressure: PropTypes.number
};
function mapStateToProps(state) { // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {
    highPressure: state.app.highPressure,
    lowPressure: state.app.lowPressure
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    changeLowPressure(pressure) {
      return {
        type: 'CHANGE_LOW_PRESSURE',
        pressure
      };
    },
    changeHighPressure(pressure) {
      return {
        type: 'CHANGE_HIGH_PRESSURE',
        pressure
      };
    },
    submitPressure() {
      return {
        type: 'SUBMIT_PRESSURE'
      };
    }
  };
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
