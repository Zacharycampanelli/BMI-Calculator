import { useState } from 'react';
import RadioInput from './RadioInput';
import StatsInput from './StatsInput';
import BMIScoreBox from './BMIScoreBox';

const BMICalculatorBox = () => {
  const [unit, setUnit] = useState('metric');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const updateUnitHandler = (e) => {
    setUnit(e.target.value);
  };

  return (
    <div className="bmi-box">
      <h3>Enter your details below</h3>
      <div className="unit-box">
        <RadioInput unitIn="metric" setUnit={updateUnitHandler} check={unit} />
        <RadioInput unitIn="imperial" setUnit={updateUnitHandler} check={unit} />
      </div>
      <StatsInput unit={unit} setWeight={setWeight} setHeight={setHeight} />
      <BMIScoreBox weight={weight} height={height} unit={unit} />
    </div>
  );
};

export default BMICalculatorBox;
