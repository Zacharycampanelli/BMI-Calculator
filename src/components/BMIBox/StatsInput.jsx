import MetricStats from './MetricStats';
import ImperialStats from './ImperialStats';

const StatsInput = ({ unit, setWeight, setHeight, height, weight, BMI, setBMI }) => {
  let data;

  unit === 'metric' ? (
    data = <MetricStats setWeight={setWeight} setHeight={setHeight}  weight={weight} height={height} BMI={BMI} setBMI={setBMI} />
  ) : (
    data = <ImperialStats setWeight={setWeight} setHeight={setHeight} />
  );

  return <>{data}</>;
};

export default StatsInput;
