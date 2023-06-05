import MetricStats from './MetricStats';
import ImperialStats from './ImperialStats';

const StatsInput = ({ unit, setWeight, setHeight }) => {
  let data;

  if (unit === 'metric') data = <MetricStats setWeight={setWeight} setHeight={setHeight} />;
  else if (unit === 'imperial') data = <ImperialStats setWeight={setWeight} setHeight={setHeight} />;

  return <div>{data}</div>;
};

export default StatsInput;
