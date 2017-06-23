import React from 'react';
import PropTypes from 'prop-types';

const Warning = ({ isValid, validationType, length }) => {
  switch(validationType) {
  case 'length':
    if (isValid === undefined || isValid) {
      return null;
    } else {
      return (
        <span className="warning">
          This field should at least have {length} characters.
        </span>
      );
    }
  case 'passwordMatch':
    if (isValid === undefined || isValid) {
      return null;
    } else {
      return (
        <span className="warning">
          Password don't match.
        </span>
      );
    }
  default:
    return null
  }
};

export { Warning };

Warning.propTypes = {
  isValid: PropTypes.bool,
  validationType: PropTypes.string.isRequired,
  length: PropTypes.number
};

export default class Form extends React.Component {
  static placeHolder = {
    name: { message: 'Enter your name', color: 'grey' },
    password: { message: '12345678', color: 'grey' },
    password2: { message: '12345678', color: 'grey' },
    comment: { message: 'Enter your comment', color: 'grey' }
  };

  state = {
    ...this.constructor.placeHolder
  };

  validateHelper = {
    length: (name, length) => {
      if (
        this.state[name].message.length <= length ||
        this.state[name].color === 'grey'
      ) {
        this.setState({
          [name]: Object.assign({}, this.state[name], { isValid: false })
        });
      }
    },
    passwordMatch: name => {
      const password1 = this.state.password.message;
      const password2 = this.state.password2.message;
      if (password1 !== password2 || this.state[name].color === 'grey') {
        this.setState({
          password2: Object.assign({}, this.state.password2, { isValid: false })
        });
      }
    }
  };

  validateCenter = () => {
    this.validateHelper.length('name', 8);
    this.validateHelper.passwordMatch('password');
  };

  handleSubmit = event => {
    event.preventDefault();
    this.validateCenter();
    console.log(this.state);
  };
  handleFocus = event => {
    const target = event.target;
    const name = target.name;
    const color = this.state[name].color;
    if (color === 'grey') {
      this.setState({
        [name]: Object.assign({}, this.state[name], {
          message: '',
          color: 'black'
        })
      });
    }
  };

  handleBlur = event => {
    const target = event.target;
    const name = target.name;
    const message = this.constructor.placeHolder[name].message;
    if (target.value.length === 0) {
      this.setState({
        [name]: Object.assign({}, this.state[name], {
          message: message,
          color: 'grey'
        })
      });
    }
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: Object.assign({}, this.state[name], { message: value })
    });
  };

  renderInput = (type, name) => {
    const props = {
      type: type,
      name: name,
      value: this.state[name].message,
      onFocus: this.handleFocus,
      onChange: this.handleChange,
      style: { color: this.state[name].color },
      onBlur: this.handleBlur,
      className: 'input ' + name
    };

    if (type === 'textarea') {
      return <textarea {...props} />;
    }

    return <input {...props} />;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          {this.renderInput('text', 'name')}
          <Warning isValid={this.state.name.isValid} validationType="length" />
        </label>
        <br />
        <label>
          Password:
          {this.renderInput('password', 'password')}
        </label>
        <br />
        <label>
          Password:
          {this.renderInput('password', 'password2')}
          <Warning
            isValid={this.state.password2.isValid}
            validationType="passwordMatch"
          />
        </label>
        <br />
        <label>
          Comments: <br />
          {this.renderInput('textarea', 'comment')}
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
