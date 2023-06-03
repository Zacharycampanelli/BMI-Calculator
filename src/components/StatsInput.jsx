import MetricStats from './MetricStats';

const StatsInput = ({ unit, setWeight, setHeight }) => {
  let data;

  if (unit === 'metric') data = <MetricStats setWeight={setWeight} setHeight={setHeight} />;
  else if (unit === 'imperial') data = null;

  return <div>{data}</div>;
};

export default StatsInput;
