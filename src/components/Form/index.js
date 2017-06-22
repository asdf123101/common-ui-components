import React from 'react';

export class InputWithPlaceHolder extends React.Component {
  state = {
    value: this.props.placeHolder,
    fontColor: 'grey'
  };

  handleFocus = () => {
    if (this.state.fontColor === 'grey') {
      this.setState({
        value: '',
        fontColor: 'black'
      });
    }
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleBlur = () => {
    if (this.state.value.length === 0) {
      this.setState({
        value: this.props.placeHolder,
        fontColor: 'grey'
      });
    }
  };

  render() {
    if (this.props.type === 'textarea') {
      return (
        <textarea
          type={this.props.type}
          value={this.state.value}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          style={{ color: this.state.fontColor }}
          onBlur={this.handleBlur}
          className="input"
        />
      );
    }

    return (
      <input
        type={this.props.type}
        value={this.state.value}
        onFocus={this.handleFocus}
        onChange={this.handleChange}
        style={{ color: this.state.fontColor }}
        onBlur={this.handleBlur}
        className="input"
      />
    );
  }
}

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <label>
          Name:
          <InputWithPlaceHolder type="text" placeHolder="Enter your name" />
        </label>
        <br />
        <label>
          Password:
          <InputWithPlaceHolder type="password" placeHolder="12345678" />
        </label>
        <br />
        <label>
          Password:
          <InputWithPlaceHolder type="password" placeHolder="12345678" />
        </label>
        <br />
        <label>
          Comments: <br />
          <InputWithPlaceHolder
            type="textarea"
            placeHolder="Enter your comments."
          />
        </label>
      </form>
    );
  }
}
