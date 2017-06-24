import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Motion, spring } from 'react-motion';
import './style.css';

export default class Form extends React.Component {
  static placeHolder = {
    name: { message: 'Enter your name', color: 'grey', warnings: [] },
    password: { message: '12345678', color: 'grey', warnings: [] },
    password2: { message: '12345678', color: 'grey', warnings: [] },
    comments: { message: 'Enter your comment', color: 'grey', warnings: [] }
  };

  state = {
    ...this.constructor.placeHolder
  };

  validateRequired = name => {
    const warning = (
            <Motion defaultStyle={{x:0}} style={{ x: spring(1) }}>
        {({x}) =>
          <span className="warning" key="isRequired" style={{opacity:x}}>
        This field is required.
      </span>}
           </Motion>
    );
    const color = this.state[name].color;
    return this.state[name].message.length > 0 && color !== 'grey'
      ? null
      : warning;
  };

  validateLength = (name, length) => {
    const warning = (
      <Motion defaultStyle={{x:0}} style={{ x: spring(1) }}>
        {({x}) =>
          <span className="warning" key="minLength" style={{opacity: x}}>
        This field should at least have {length} characters.
      </span>}
      </Motion>
    );
    const color = this.state[name].color;
    return this.state[name].message.length >= length && color !== 'grey'
      ? null
      : warning;
  };

  validatePasswordMatch = (name1, name2) => {
    const password1 = this.state[name1].message;
    const password2 = this.state[name2].message;
    const warning = (
      <span className="warning" key="pwdMatch">
        Password don't match.
      </span>
    );
    const color1 = this.state[name1].color;
    return password1 === password2 && color1 !== 'grey' ? null : warning;
  };

  handleSubmit = event => {
    // force validate all fields
    const keys = Object.keys(this.state);
    keys.forEach(name => {
       const warnings = this.validateItem(name);
if (name === 'password' || name === 'password2') {
      // match two password input behavior
      this.setState({
        password: Object.assign({}, this.state.password, {
          warnings
        }),
        password2: Object.assign({}, this.state.password2, {
          warnings
        })
      });
    } else {
      this.setState({
        [name]: Object.assign({}, this.state[name], {
          warnings
        })
      });
    }
    });

    const inValidFields = keys.filter(
      name => this.state[name].warnings.length !== 0
    );
    if (inValidFields.length !== 0 || this.state.password.color === 'grey') {event.preventDefault()};
  };

  wrapWarnings = (...theArgs) => {
    const validWarnings = theArgs.filter(arg => arg !== null);
    return validWarnings;
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

  validateItem = name => {
    let warnings;
    switch (name) {
      case 'name':
        warnings = this.wrapWarnings(
          this.validateLength(name, 5),
          this.validateRequired(name)
        );
        break;
      case 'password':
      case 'password2':
        warnings = this.wrapWarnings(
          this.validatePasswordMatch('password', 'password2'),
          this.validateRequired(name)
        );
        break;
      case 'comments':
        warnings = this.wrapWarnings(
          this.validateLength(name, 20),
          this.validateRequired(name)
        );
        break;
      default:
        break;
    }
    return warnings;
  };
  handleBlur = event => {
    const target = event.target;
    const name = target.name;
    const message = this.constructor.placeHolder[name].message;

    const warnings = this.validateItem(name);
    if (target.value.length === 0) {
      this.setState({
        [name]: Object.assign({}, this.state[name], {
          message: message,
          color: 'grey',
          warnings
        })
      });
    } else if (name === 'password' || name === 'password2') {
      // match two password input behavior
      this.setState({
        password: Object.assign({}, this.state.password, {
          warnings
        }),
        password2: Object.assign({}, this.state.password2, {
          warnings
        })
      });
    } else {
      this.setState({
        [name]: Object.assign({}, this.state[name], {
          warnings
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
    const borderColor = this.state[name].warnings.length ? 'red' : null;
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
        {this.state.name.warnings}
        <label htmlFor="password">
          Password:
        </label>
        {this.renderInput('password', 'password')}
        {this.state.password.warnings}
        <label htmlFor="password2">
          Password:
        </label>
        {this.renderInput('password', 'password2')}
        {this.state.password2.warnings}

        <label htmlFor="comments">
          Comments:
        </label>
        {this.renderInput('textarea', 'comments')}
        {this.state.comments.warnings}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
