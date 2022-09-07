import React from 'react';

const ContactPicker = ({ onChange, names }) => {

  return (
    <select name="contactPicker" id="contactPicker" onChange={(e) => onChange(e.target.value)}>
      <option value={''} key={-1} >
        {' '}
        No Contact Selected
      </option>
      {names.map((name) => {
        return (
          <option value={name} key={name}>
            {name}
          </option>
        );
      })}
    </select>
  );
};

export default ContactPicker;
