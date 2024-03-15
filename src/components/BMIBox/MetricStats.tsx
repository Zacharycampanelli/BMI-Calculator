interface MetricStatsParams {
  setWeight: React.Dispatch<React.SetStateAction<number>>
  setHeight: React.Dispatch<React.SetStateAction<number>>
}

const MetricStats: React.FC<MetricStatsParams> = ({ setWeight, setHeight }) => {
  
  const inputHeightHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let tempHeight = parseInt(e.target.value);
    tempHeight = tempHeight / 100;
    setHeight(tempHeight);
  };

  const inputWeightHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
