import { useState } from 'react';
import RadioInput from './RadioInput';
import StatsInput from './StatsInput';
import BMIScoreBox from './BMIScoreBox';

const BMICalculatorBox = () => {
  const [unit, setUnit] = useState('metric');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [BMI, setBMI] = useState(0.0);

  const updateUnitHandler = (e) => {
    setUnit(e.target.value);
  };

  return (
    <div className={`bmi-box ${unit}-box`}>
      <h3>Enter your details below</h3>
      <div className="unit-box">
        <RadioInput className="radio-input" unitIn="metric" setUnit={updateUnitHandler} check={unit} />
        <RadioInput className="radio-input" unitIn="imperial" setUnit={updateUnitHandler} check={unit} />
      </div>
      <StatsInput
        unit={unit}
        setWeight={setWeight}
        setHeight={setHeight}
        height={height}
        weight={weight}
        BMI={BMI}
        setBMI={setBMI}
      />
      <BMIScoreBox weight={weight} height={height} unit={unit} BMI={BMI} setBMI={setBMI} />
    </div>
  );
};

export default BMICalculatorBox;
