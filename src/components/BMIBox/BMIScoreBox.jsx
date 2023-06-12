import { useState, useEffect } from 'react';

const BMIScoreBox = ({ weight, height, unit, BMI, setBMI }) => {
  const [weightStatus, setWeightStatus] = useState('');
  const [range, setRange] = useState({
    lower: 0,
    upper: 0,
  });

  let tempBMI = 0;

  const convertWeight = (weight, unit) => {
    let tempWeight;
    if (unit === 'metric') {
      tempWeight = weight.toFixed(1);
      tempWeight = tempWeight + ' kgs ';
    } else if (unit === 'imperial') {
      let tempStones = (weight / 14).toFixed(1);
      let tempLbs = (weight % 14).toFixed(1);
      while (tempLbs > 13) {
        tempLbs--;
        tempStones++;
      }
      tempWeight = tempStones + ' stones ' + tempLbs + ' lbs';
    }
    return tempWeight;
  };

  const getWeightRange = (height, unit) => {
    let lowerLimit = 18.5;
    let upperLimit = 24.9;
    let lowerBase, upperBase;
    lowerBase = lowerLimit * height ** 2;
    upperBase = upperLimit * height ** 2;
    console.log(lowerBase, upperBase);
    if (unit === 'imperial') {
      lowerBase = lowerBase / 703;
      upperBase = upperBase / 703;
      lowerBase = convertWeight(lowerBase, 'imperial');
      upperBase = convertWeight(upperBase, 'imperial');
    }

    if (unit === 'metric') {
      console.log('yas');
      lowerBase = convertWeight(lowerBase, 'metric');
      upperBase = convertWeight(upperBase, 'metric');
    }

    console.log(lowerBase);
    console.log(upperBase);
    setRange({ lower: lowerBase, upper: upperBase });
  };

  const getWeightStatus = (bmi) => {
    console.log('status ' + typeof bmi)
    if (bmi < 18.5) return setWeightStatus('underweight');
    if (bmi < 24.9) return setWeightStatus('a healthy weight');
    if (bmi < 29.9) return setWeightStatus('overweight');
    if (30 <= bmi) return setWeightStatus('obese');
  };

  // Move to imperial/metric
  useEffect(() => {
    if (weight !== 0 && height !== 0) {

    
    if (unit === 'metric') {
      tempBMI = weight / height ** 2;
      console.log('t' + tempBMI);
    } else if (unit === 'imperial') {
      tempBMI = 703 * (weight / height ** 2);
    }
    tempBMI = Number(tempBMI.toFixed(1));
    console.log(tempBMI)
    setBMI(tempBMI);
    getWeightRange(height, unit);
    getWeightStatus(BMI);
  }
  }, [weight, height, unit]);

  return (
    <div className="bmi-score-card">
      Your BMI is...
      <span className="score">{BMI}</span>
      <p>
        Your BMI suggests you're {weightStatus}. Your ideal weight is between
        <span className="range">{' ' + `${range.lower} - ${range.upper}`}.</span>
      </p>
    </div>
  );
};

export default BMIScoreBox;
