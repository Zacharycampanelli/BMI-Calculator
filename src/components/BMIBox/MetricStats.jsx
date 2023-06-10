import React from 'react'

const MetricStats = ({ setWeight, setHeight, weight, height, BMI, setBMI }) => {
    
    const inputHeightHandler = e => {
      let tempHeight = parseInt(e.target.value);
      tempHeight = tempHeight / 100;
      console.log(tempHeight)
        setHeight(tempHeight)
    }
    const inputWeightHandler = e => {
        setWeight(parseInt(e.target.value))
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
