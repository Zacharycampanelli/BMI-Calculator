import { useState, useEffect } from 'react';

const BMIScoreBox = ({ weight, height, unit }) => {
  const [BMI, setBMI] = useState(0);
  let tempBMI = 0;

  useEffect(() => {
    if (unit === 'metric') {
      tempBMI = weight / (height / 100) ** 2;
    } else if (unit === 'imperial') {
      tempBMI = (703 * weight) / height ** 2;
    }
    setBMI(tempBMI.toFixed(1))
  }, [weight, height, unit]);

  return <div>Your BMI is... {BMI}</div>;
};

export default BMIScoreBox;
