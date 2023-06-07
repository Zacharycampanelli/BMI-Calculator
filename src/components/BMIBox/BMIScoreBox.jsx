import { useState, useEffect } from 'react';


const BMIScoreBox = ({ weight, height, unit }) => {
  const [BMI, setBMI] = useState(0);
  let [weightStatus, setWeightStatus]  = useState(0);
  let [lowerRange, setLowerRange] = useState(0)
  let [upperRange, setUpperRange] = useState(0)
  let tempBMI =  0;

  const convertWeight = (weight, unit) => {
   let tempWeight
    if (unit === 'metric'){} 
    else if (unit === 'imperial') {
        let tempStones = (weight / 14).toFixed(0) 
        let tempLbs =  (weight % 14).toFixed(0) 
        while (tempLbs > 13) {
            tempLbs--;
            tempStones++;
        }
        tempWeight = tempStones + ' stones ' + tempLbs + ' lbs' 
    }
    return tempWeight;
  }

  const getWeightRange = (height, unit) => {
    let lowerLimit = 18.5
    let upperLimit = 24.9
    let lowerBase, upperBase;

        lowerBase = lowerLimit * (height ** 2) 
        upperBase = upperLimit * (height ** 2) 
    
    if (unit === 'imperial') {
        lowerBase = lowerBase / 703
        upperBase = upperBase / 703
       }

       console.log(lowerBase)
       console.log(upperBase)
     lowerBase = convertWeight(lowerBase.toFixed(1), 'imperial')
     upperBase = convertWeight(upperBase.toFixed(1), 'imperial')
       setLowerRange(lowerBase);
       setUpperRange(upperBase)
    }

  const getWeightStatus = (bmi) => {
    if (bmi < 18.5)  return setWeightStatus('underweight')
    if (18.5 <= bmi < 24.9) return setWeightStatus('a healthy weight')
    if (25 <= bmi < 29.9) return setWeightStatus('overweight')
    if (30 <= bmi) return setWeightStatus('obese')
  }

  useEffect(() => {
    if (unit === 'metric') {
      tempBMI = weight / (height) ** 2;
    } else if (unit === 'imperial') {
      tempBMI = 703 * (weight / height ** 2);
    }
    tempBMI = parseInt(tempBMI.toFixed(1))
    setBMI(tempBMI)
    getWeightStatus(tempBMI)
    getWeightRange( height, unit)
  }, [weight, height, unit]);

  return <div className='bmi-score-card'>
    Your BMI is... 
    <span className='score'>
        {BMI}
        </span>
        <p>

        Your BMI suggests you're {weightStatus}. 
  Your ideal weight is between  
  <span className='range'> 
    {' ' + `${lowerRange} - ${upperRange}`}.
    </span>
         </p>
    </div>;
};

export default BMIScoreBox;
