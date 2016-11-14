import React, {PropTypes} from 'react';
import './app.css';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeLowPressure = this.handleChangeLowPressure.bind(this);
    this.handleChangeHighPressure = this.handleChangeHighPressure.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.actions.fetchPressureList();
  }

  handleChangeLowPressure(event) {
    const {actions} = this.props;
    actions.changeLowPressure(Number(event.target.value));
  }

  handleChangeHighPressure(event) {
    const {actions} = this.props;
    actions.changeHighPressure(Number(event.target.value));
  }

  handleSubmit() {
    const {actions, highPressure, lowPressure} = this.props;
    actions.submitPressure(lowPressure, highPressure);
  }

  render() {
    const {lowPressure, highPressure, pressureList} = this.props;
    return (
      <div>
        <input value={lowPressure} onChange={this.handleChangeLowPressure}/>
        <input value={highPressure} onChange={this.handleChangeHighPressure}/>
        {pressureList.map((pressure, index) =>
          <li key={index}>{pressure.low} | {pressure.high}</li>
        )}
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

AppComponent.propTypes = {
  actions: PropTypes.object,
  highPressure: PropTypes.number,
  lowPressure: PropTypes.number,
  pressureList: PropTypes.array
};

export default AppComponent;
