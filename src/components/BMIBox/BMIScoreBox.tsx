import React, { useState, useEffect } from 'react';

interface BMIScoreBoxProps {
  weight: number,
  height: number,
  unit: string,
  BMI: number,
  setBMI: React.Dispatch<React.SetStateAction<number>>
};

interface Range {
  lower: string,
  upper: string
};


const BMIScoreBox: React.FC<BMIScoreBoxProps> = ({ weight, height, unit, BMI, setBMI }) => {
  const [weightStatus, setWeightStatus] = useState('');
  const [range, setRange] = useState<Range>({
    lower: '',
    upper: '',
  });

  let tempBMI = 0;

  const convertWeight = (weight: number, unit: string) => {
    let tempWeight;
    if (unit === 'metric') {
      tempWeight = weight.toFixed(1);
      tempWeight = tempWeight + ' kgs ';
    } else if (unit === 'imperial') {
      let tempStones = Math.floor(weight / 14);
      let tempLbs = Math.floor(weight % 14);
      while (tempLbs > 13) {
        tempLbs--;
        tempStones++;
      }
      tempWeight = tempStones + ' stones ' + tempLbs + ' lbs';
    }
    return tempWeight;
  };

  const getWeightRange = (height: number, unit: string) => {
    let lowerLimit = 18.5;
    let upperLimit = 24.9;
    let lowerBase = lowerLimit * height ** 2;
    let upperBase = upperLimit * height ** 2;
    let lowerString, upperString;
    if (unit === 'imperial') {
      lowerBase = lowerBase / 703;
      upperBase = upperBase / 703;
      lowerString = convertWeight(lowerBase, 'imperial');
      upperString = convertWeight(upperBase, 'imperial');
    }

    if (unit === 'metric') {
      lowerString = convertWeight(lowerBase, 'metric');
      upperString = convertWeight(upperBase, 'metric');
    }

    if (lowerString && upperString) {
      setRange({ lower: lowerString, upper: upperString });
    }
  };

  const getWeightStatus = (bmi: number) => {
    if (bmi < 18.5) return setWeightStatus('underweight');
    if (bmi < 24.9) return setWeightStatus('a healthy weight');
    if (bmi < 29.9) return setWeightStatus('overweight');
    if (30 <= bmi) return setWeightStatus('obese');
  };

  useEffect(() => {
    if (weight !== 0 && height !== 0) {
      if (unit === 'metric') {
        tempBMI = weight / height ** 2;
      } else if (unit === 'imperial') {
        tempBMI = 703 * (weight / height ** 2);
      }
      tempBMI = Number(tempBMI.toFixed(1));
      setBMI(tempBMI);
      getWeightRange(height, unit);
      getWeightStatus(BMI);
    }
  }, [weight, height, unit, BMI]);

  if (BMI === 0) {
    return (
      <div className="bmi-score-card">
        <h3>Welcome!</h3>
        <p>Enter your height and weight and you’ll see your BMI result here</p>
      </div>
    );
  }

  return (
    <div className="bmi-score-card">
      Your BMI is...
      <span className="score">{BMI}</span>
      <p className="status-range">
        Your BMI suggests you're {weightStatus}. Your ideal weight is between
        <span className="range">{' ' + `${range.lower} - ${range.upper}`}</span>
      </p>
    </div>
  );
};

export default BMIScoreBox;
