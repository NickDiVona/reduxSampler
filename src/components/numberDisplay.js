import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment } from '../redux/actions';
import '../App';

// make the class itself
class NumberDisplay extends Component {
  render() {
    // make a clickable div that calls "increment" when clicked, this will update our application state
    // inside of the div, show some text for whatever "number" is equal to in our application state
    return (
      <div className="Button" onClick={() => this.props.increment()}>
        <p>{this.props.number}</p>
      </div>
    );
  }
}

// declare mapStateToProps to turn our application level state in our Redux store into props available to this component
const mapStateToProps = state => {
  return {
    // set the key to number and have it set to whatever the state value's number property
    number: state.number
  };
};

// declare mapDispatchToProps, have it take in dispatch (it will always do this)
const mapDispatchToProps = dispatch => {
  // have it return bindActionCreators with arguments
  // as the first arg pass in an object with any actions we want to use, seperated by commas
  // as the second arg pass in dispatch
  return bindActionCreators({ increment }, dispatch);
};

// export the component using connect so it is aware of the application state
// in the first call there are 2 args, the first is always MSTP and the second is always MDTP, if you aren't using one replace it with null
// for the second call put the component name
export default connect(mapStateToProps, mapDispatchToProps)(NumberDisplay);
