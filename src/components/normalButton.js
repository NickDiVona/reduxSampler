import React, { Component } from 'react';

class NormalButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      normalButtonCount: 0
    };
  }

  incrementNormalButtonCount() {
    this.setState({
      normalButtonCount: this.state.normalButtonCount + 1
    });
  }

  resetNormalButtonCount() {
    this.setState({
      normalButtonCount: 0
    });
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
          className="Blue-Button"
          onClick={() => this.incrementNormalButtonCount()}
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
