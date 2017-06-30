import React from 'react';
import PropTypes from 'prop-types';

import { SelectButton } from '../style';

export default function Picker({ value, onChange, options }) {
  return (
    <span>
      <h1>{value.replace(/^./g, x => x.toUpperCase())}</h1>
      <SelectButton onChange={e => onChange(e.target.value)} value={value}>
        {options.map(option =>
          <option value={option} key={option}>
            {option}
          </option>
        )}
      </SelectButton>
    </span>
  );
}

Picker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
