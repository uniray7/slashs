import * as React from "react";

const ENTER_KEY_CODE = 13;

export default class InputBox extends React.PureComponent<any, any> {
  readonly state = { text: "" };

  handleInputChange = (e: any) => {
    this.setState({ text: e.target.value });
  };

  handleKeyDown = (e: any) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      // enter
      this.props.addMessage(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <input
        type="text"
        onKeyDown={this.handleKeyDown}
        onChange={this.handleInputChange}
        value={this.state.text}
      />
    );
  }
}
