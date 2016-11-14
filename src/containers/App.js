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
import {create} from 'apisauce';

// define the api
const api = create({
  baseURL: 'http://localhost:8000/',
  headers: {Accept: 'application/json'}
});

// start making calls


/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, highPressure, lowPressure, pressureList} = this.props;
    console.log(pressureList);
    return (<Main
      actions={actions}
      highPressure={highPressure}
      lowPressure={lowPressure}
      pressureList={pressureList}/>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object,
  highPressure: PropTypes.number,
  lowPressure: PropTypes.number,
  pressureList: PropTypes.array
};
function mapStateToProps(state) { // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {
    highPressure: state.app.highPressure,
    lowPressure: state.app.lowPressure,
    pressureList: state.app.pressureList
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
    },
    requestPressureList() {
      return {
        type: 'REQUEST_PRESSURE_LIST',
      };
    },
    receivePressureList(pressureList) {
      return {
        type: 'RECEIVE_PRESSURE_LIST',
        pressureList
      };
    },
    fetchPressureList() {
      return dispatchFunc => {
        dispatchFunc(actions.requestPressureList());
        api.get('/api/bps')
        .then((response) => {
          dispatchFunc(actions.receivePressureList(response.data));
        });
      };
    }
  };
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
