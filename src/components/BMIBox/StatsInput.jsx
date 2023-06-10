import MetricStats from './MetricStats';
import ImperialStats from './ImperialStats';

const StatsInput = ({ unit, setWeight, setHeight, height, weight, BMI, setBMI }) => {
  let data;

  

  if (unit === 'metric') data = <MetricStats setWeight={setWeight} setHeight={setHeight}  weight={weight} height={height} BMI={BMI} setBMI={setBMI} />;
  else if (unit === 'imperial') data = <ImperialStats setWeight={setWeight} setHeight={setHeight} weight={weight}  height={height} BMI={BMI} setBMI={setBMI} />;

  return <div>{data}</div>;
};

export default StatsInput;
