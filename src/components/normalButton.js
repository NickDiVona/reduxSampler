import React, { Component } from 'react';

class NormalButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      normalButtonCount: 0,
      normalButtonColor: 'lightsteelblue'
    };
  }

  incrementNormalButtonCount() {
    this.setState({
      normalButtonCount: this.state.normalButtonCount + 1
    });
  }

  changeNormalButtonColor(color) {
    this.setState({
      normalButtonColor: color
    });
  }

  resetNormalButtonCount() {
    this.setState({
      normalButtonCount: 0
    });

    this.setState({
      normalButtonColor: 'lightsteelblue'
    });
  }

  normalButtonPressed(color) {
    switch (color) {
      case 'lightsteelblue':
        return this.changeNormalButtonColor('lightseagreen');

      case 'lightseagreen':
        return this.changeNormalButtonColor('lightcoral');

      case 'lightcoral':
        return this.changeNormalButtonColor('lightgrey');

      default:
        return this.changeNormalButtonColor('lightsteelblue');
    }
  }

  render() {
    return (
      <div className="Button-Container">
        <div className="Label">
          Normal Button
          <br />
          Count: {this.state.normalButtonCount}
        </div>
        <button
          style={{
            backgroundColor: this.state.normalButtonColor,
            borderRadius: 5,
            width: 150,
            height: 50,
            border: 0
          }}
          onClick={() => this.normalButtonPressed(this.state.normalButtonColor)}
        />
        <button
          className="Reset-Button"
          onClick={() => this.resetNormalButtonCount()}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default NormalButton;
