const MetricStats = ({ setWeight, setHeight }) => {
  const inputHeightHandler = (e) => {
    let tempHeight = parseInt(e.target.value);
    tempHeight = tempHeight / 100;
    setHeight(tempHeight);
  };
  const inputWeightHandler = (e) => {
    setWeight(parseInt(e.target.value));
  };

  return (
    <div className="metric-stats">
      <label className="metric-height">
        <p>Height</p>
        <input className="metric-height-input" type="number" placeholder="0" onChange={inputHeightHandler} />
        <span className="metric-label">cm</span>
      </label>
      <label className="metric-weight">
        <p>Weight</p>
        <input className="metric-weight-input" type="number" placeholder="0" onChange={inputWeightHandler} />
        <span className="metric-label">kg</span>
      </label>
    </div>
  );
};

export default MetricStats;
