const BMICalculatorBox = () => {
  return (
    <div className="bmi-box">
      <h3>Enter your details below</h3>
      <div className="unit-box">
        {/* <span> */}
        <label htmlFor="metric"  className="unit">Metric
        <input type="radio" id="metric" name="units" />
        <span className="circle"></span>
        </label>
        {/* </span> */}
        {/* <span > */}
        <label htmlFor="imperial" className="unit">Imperial
        <input type="radio" id="imperial" name="units"  />
        <span className="circle"></span>
        </label>
        {/* </span> */}
      </div>
    </div>
  )
}

export default BMICalculatorBox
