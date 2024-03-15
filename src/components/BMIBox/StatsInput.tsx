import MetricStats from './MetricStats';
import ImperialStats from './ImperialStats';

interface StatsInputProps {
  unit: string;
  setWeight: React.Dispatch<React.SetStateAction<number>>;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
}

const StatsInput: React.FC<StatsInputProps> = ({ unit, setWeight, setHeight }) => {
  let data;

  unit === 'metric'
    ? (data = <MetricStats setWeight={setWeight} setHeight={setHeight} />)
    : (data = <ImperialStats setWeight={setWeight} setHeight={setHeight} />);

  return <>{data}</>;
};

export default StatsInput;
