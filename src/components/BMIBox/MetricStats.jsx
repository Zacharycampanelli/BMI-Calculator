import React from 'react'

const MetricStats = ({ setWeight, setHeight }) => {
    
    const inputHeightHandler = e => {
        setHeight(e.target.value)
    }
    const inputWeightHandler = e => {
        setWeight(e.target.value)
    }

  return (
    <div className='metric-stats'>
      <label className='metric-height'>Height
        <input className='metric-height-input' type='number' onChange={inputHeightHandler}/>
        <span className='metric-label'>cm</span>
      </label>
      <label className='metric-weight'>
        Weight
        <input className='metric-weight-input' type='number' onChange={inputWeightHandler}/>
        <span className='metric-label'>kg</span>

      </label>
    </div>
  )
}

export default MetricStats
