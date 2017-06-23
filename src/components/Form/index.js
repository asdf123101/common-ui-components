import React from 'react';
import PropTypes from 'prop-types'

export default class Form extends React.Component {
  static placeHolder = {
    name: 'Enter your name',
    password: '12345678',
    password2: '12345678',
    comment: 'Enter your comment'
  }
  
  state = {
    ...this.constructor.placeHolder
  }

  handleFocus = (event) => {
    const target = event.target
    const color = target.style.color;
    const name = target.name;
    if (target.value === this.constructor.placeHolder[name] && color === 'grey') {
      this.setState({
        [name]:'',
      })
    }
  };
   
  handleBlur = (event) => {
    const target = event.target
    const name = target.name
    if (target.value.length === 0) {
      this.setState({
        [name]: this.constructor.placeHolder[name],
      });
    }
  };
  
  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]:value})
  };


  renderInput = (type,name) => {
    const color = (this.state[name].length === 0) ? 'black' : 'grey'
    
    if (type === 'textarea') {
      return (
        <textarea
           type={type}
           name={name}
          value={this.state[name]}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          style={{ color: color }}
          onBlur={this.handleBlur}
          className={"input " + name}
        />
      );
    }

    return (
      <input
           type={type}
           name={name}
          value={this.state[name]}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          style={{ color: color }}
          onBlur={this.handleBlur}
           className={"input " + name}
      />
    );
  }
  
  render() {
    return (
      <form>
        <label>
          Name:
          {this.renderInput('text','name')}
        </label>
        <br />
        <label>
          Password:
          {this.renderInput('password','password')}
        </label>
        <br />
        <label>
          Password:
{this.renderInput('password','password2')}
        </label>
        <br />
        <label>
          Comments: <br />
          {this.renderInput('textarea','comment')}
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
