import React from 'react'

// const ContactPicker = () => ({ name, onChange, contacts, getContactNames }) => {
//   const names = getContactNames()
//   console.log('contact names: ',names);

//   return (
//     <select name={name} onChange={onChange}>
//       <option value={""} key={-1} selected="selected">
//         No Contact Selected
//       </option>
//       {names.map((name) => {
//         return (
//           <option value={name} key={name}>
//             {name}
//           </option>
//         );
//       })}
//     </select>
//   );
// };

const ContactPicker = ({ contact, contacts, onChange }) => {
  return (
    <select
      name="contactPicker"
      id="contactPicker"
      value={contact}
      onChange={(e) => onChange(e.target.value)}
    ></select>
  )
}

export default ContactPicker