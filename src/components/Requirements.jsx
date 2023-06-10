import React from 'react'

const Requirements = ({ requirement, description, icon}) => {
  return (
    <div className='requirement'>
      <img src={icon} alt="" />
      <h3>{requirement}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Requirements
