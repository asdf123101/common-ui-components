import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

const Warning = ({ isValid, validationType, length }) => {
  switch (validationType) {
    case 'length':
      return isValid === undefined || isValid
        ? null
        : <span className="warning">
            This field should at least have {length} characters.
          </span>;
    case 'passwordMatch':
      return isValid === undefined || isValid
        ? null
        : <span className="warning">
            Password don't match.
          </span>;
    default:
      return null;
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
    password: { message: '12345678', color: 'grey', isValid: true },
    password2: { message: '12345678', color: 'grey' },
    comments: { message: 'Enter your comment', color: 'grey' }
  };

  state = {
    ...this.constructor.placeHolder
  };

  // validateCenter = {
  //   name: this.validateHelper.length('name', 5),
  //   password2: this.validateHelper.passwordMatch('password'),
  //   comments: this.validateHelper.length('comments', 20),};

  validateLength = (name, length) => {
    const isValid = !(
      this.state[name].message.length <= length ||
      this.state[name].color === 'grey'
    );
    this.setState({
      [name]: Object.assign({}, this.state[name], { isValid: isValid })
    });
  };

  validatePasswordMatch = () => {
    const password1 = this.state.password.message;
    const password2 = this.state.password2.message;
    const isValid = !(
      password1 !== password2 || this.state.password2.color === 'grey'
    );
    this.setState({
      password2: Object.assign({}, this.state.password2, { isValid: isValid })
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // this.validateCenter();
    // const keys = Object.keys(this.state)
    // let isAllValid = true
    // keys.forEach(key => {
    // let status = (this.state[key].isValid === true) ? true : false
    // isAllValid = status && isAllValid
    //   })
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
    switch (name) {
      case 'name':
        this.validateLength(name, 5);
        break;
      case 'password':
      case 'password2':
        this.validatePasswordMatch();
        break;
      case 'comments':
        this.validateLength(name, 10);
        break;
    }
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
    const borderColor = this.state[name].isValid === false ? 'red' : null;
    const props = {
      type: type,
      name: name,
      id: name,
      value: this.state[name].message,
      onFocus: this.handleFocus,
      onChange: this.handleChange,
      style: { color: this.state[name].color, borderColor: borderColor },
      onBlur: this.handleBlur,
      className: name
    };

    if (type === 'textarea') {
      return <textarea {...props} />;
    }

    return <input {...props} />;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} action={<Link to="/tabss" />}>
        <label htmlFor="name">
          Name:
        </label>
        {this.renderInput('text', 'name')}
        <Warning
          isValid={this.state.name.isValid}
          validationType="length"
          length={5}
        />
        <label htmlFor="password">
          Password:
        </label>
        {this.renderInput('password', 'password')}
        <label htmlFor="password2">
          Password:
        </label>
        {this.renderInput('password', 'password2')}
        <Warning
          isValid={this.state.password2.isValid}
          validationType="passwordMatch"
        />
        <label htmlFor="comments">
          Comments:
        </label>
        {this.renderInput('textarea', 'comments')}
        <Warning
          isValid={this.state.comments.isValid}
          validationType="length"
          length={20}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
