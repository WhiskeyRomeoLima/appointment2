import React from 'react'

const Item = ({ item }) => {
  return (
    <div className="tile-container">
      {Object.values(item).map((value, index) => (
        <p key={index} className={`${index === 0 ? "tile-title" : ""} tile`}>
          {value}
        </p>
      ))}
    </div>
  );
};

export default Item