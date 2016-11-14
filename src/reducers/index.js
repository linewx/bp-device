/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
/* Populated by react-webpack-redux:reducer */
import { combineReducers } from 'redux';

const INITIAL_STATE = {
  lowPressure: 80,
  highPressure: 120,
  pressureList: [{
    low: 70,
    high: 130
  }]
};

const reducers = {
  app(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'CHANGE_LOW_PRESSURE':
        return { ...state, lowPressure: action.pressure};
      case 'CHANGE_HIGH_PRESSURE':
        return {...state, highPressure: action.pressure};
      case 'SUBMIT_PRESSURE':
        return {...state, highPressure: 0, lowPressure: 0};
      case 'REQUEST_PRESSURE_LIST':
        return {...state, isFetchingPressureList: true};
      case 'RECEIVE_PRESSURE_LIST':
        return {...state, pressureList: action.pressureList};
      default:
        return state;
    }
  }
};
const combined = combineReducers(reducers);
module.exports = combined;
