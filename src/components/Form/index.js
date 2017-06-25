import React from 'react';
import Form from './Form';

const FormDemo = () => {
  return (
    <div>
      <h2>Comments</h2>
      <p>
        This form is constructed purely in React without any external library.
        The placeholders and validation are implemented in pure Javascript, thus
        no HTML5 is required and more importantly, the style of placeholders and
        warnings are easy to control. However, implementing good validation
        logic on large forms is still challegning in react as the code could
        become extremely verbose and repeative. A library is still required to
        handle more professional and long forms with complex validation process.
        In addition, using <code>setState</code> multiple times in one function
        can lead to sublte bugs as this <code>setState</code> is asynchronous.
        Updating the state with <code>setState</code> then checking certain
        conditions based on the new state in one function does not work. Use a
        callback function in <code>setState</code> instead.
      </p>
      <hr />
      <Form />
    </div>
  );
};

export default FormDemo;
