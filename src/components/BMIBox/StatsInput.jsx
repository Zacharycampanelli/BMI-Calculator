import MetricStats from './MetricStats';
import ImperialStats from './ImperialStats';

const StatsInput = ({ unit, setWeight, setHeight, height, weight }) => {
  let data;

  if (unit === 'metric') data = <MetricStats setWeight={setWeight} setHeight={setHeight}  weight={weight} height={height} />;
  else if (unit === 'imperial') data = <ImperialStats setWeight={setWeight} setHeight={setHeight} weight={weight}  height={height} />;

  return <div>{data}</div>;
};

export default StatsInput;
