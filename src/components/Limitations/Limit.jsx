import React from 'react';

const Limit = ({ limit, description, image }) => {
  return (
    <div className="single-limit">
      <div className="limit-header">
        <img src={image} className="icon" alt={limit} />
        <h4>{limit}</h4>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Limit;
