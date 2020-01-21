import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  incrementCount,
  resetCount,
  toggleColor,
  resetColor
} from '../redux/actions';
import '../App.css';

// make the class itself
class ReduxButton extends Component {
  // add helper method to call several action creators when clicked
  onReduxButtonPressed() {
    this.props.incrementCount();
    // call change color method which does some logic for us
    this.changeColor(this.props.color);
  }

  // add helper method to call several action creators when clicked
  resetButtonPressed() {
    this.props.resetCount();
    this.props.resetColor();
  }

  // add helper method to determine what color to pass to reducers
  changeColor(color) {
    // check the color that is passed in (current value of this.props.color)
    if (color === 'lightsalmon') {
      this.props.toggleColor('lightgreen');
    } else if (color === 'lightgreen') {
      this.props.toggleColor('lightyellow');
    } else {
      this.props.toggleColor('lightsalmon');
    }
  }

  // render the button with whatever color is provided to it via our data stores
  renderButton() {
    return (
      <button
        // apply inline styling so we can adjust the color on-the-fly
        style={{
          // background color of the button is whatever the color prop from our store is. If there isn't one, use lightcoral
          backgroundColor: this.props.color,
          borderRadius: 5,
          width: 150,
          height: 50,
          border: 0
        }}
        // add an onClick handler which calls a function inside of this file
        onClick={() => this.onReduxButtonPressed()}
      />
    );
  }

  render() {
    // make a clickable div that calls "increment" when clicked, this will update our application state
    // inside of the div, show some text for whatever "number" is equal to in our application state
    return (
      <div className="Button-Container">
        <div className="Label">
          Redux Button
          <br />
          Count: {this.props.number}
        </div>
        {this.renderButton()}
        <button
          className="Reset-Button"
          onClick={() => this.resetButtonPressed()}
        >
          Reset
        </button>
      </div>
    );
  }
}

// declare mapStateToProps to turn our application level state in our Redux store into props available to this component
const mapStateToProps = state => {
  return {
    // set any keys for components to use here. For their values, make sure to set it as "state." followed by whatever the key is for the data in rootReudcer, as that is where your application state is stored.
    number: state.number,
    color: state.color
  };
};

// declare mapDispatchToProps, have it take in dispatch (it will always do this)
const mapDispatchToProps = dispatch => {
  // have it return bindActionCreators with arguments
  // as the first arg pass in an object with any actions we want to use, seperated by commas
  // as the second arg pass in dispatch
  return bindActionCreators(
    { incrementCount, resetCount, toggleColor, resetColor },
    dispatch
  );
};

// export the component using connect so it is aware of the application state
// in the first call there are 2 args, the first is always MSTP and the second is always MDTP, if you aren't using one replace it with null
// for the second call put the component name
export default connect(mapStateToProps, mapDispatchToProps)(ReduxButton);
