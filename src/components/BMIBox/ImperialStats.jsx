import { useEffect, useState, useRef } from "react";

const ImperialStats = ({ setWeight, setHeight, weight, height, BMI, setBMI }) => {
  // let feet, inches, stones, pounds;
  // const [inches, setInches] = useState('')
  // const [feet, setFeet] = useState('')
  // const [pounds, setPounds] = useState('')
  // const [stones, setStones] = useState('')
  const [measurements, setMeasurements] = useState({
    inches: 0,
    feet: 0,
    pounds: 0,
    stones: 0
  })

  const inchesRef = useRef(0)
  const feetRef = useRef(0)
  const poundsRef = useRef(0)
  const stonesRef = useRef(0)



  const convertHeight = () => {
      const convertedFeet = measurements.feet;
      const convertedInches = measurements.inches;
      const total = convertedFeet * 12 + convertedInches;
      setHeight(total);
    }
  

  const convertWeight = () => {
    const convertedStones = parseInt(measurements.stones);
    const convertedPounds = parseInt(measurements.pounds);
    const total = convertedStones * 14 + convertedPounds;
    setWeight(total);
  };

  // const heightHandler = (e) => {
  //   const value = e.target.value;
  //   const name = e.target.name;
  //   if (name === 'ft') feet = parseInt(value);
  //   if (name === 'in') inches = parseInt(value);
  //   convertHeight();
  // };

  const feetChangeHandler = (e) => {
    const name = e.target.name
    const feetValue = Number(e.target.value);
    console.log(name, feetValue)
    setMeasurements({...measurements, feet: feetValue})
    // convertHeight()
  }
  const inchesChangeHandler = (e) => {
    const name = e.target.name
    const inchValue = Number(e.target.value);
    console.log(name, inchValue)
    setMeasurements({...measurements, inches: inchValue})
  }

  const stonesChangeHandler = (e) => {
    const name = e.target.name
    const stoneValue = Number(e.target.value);
    console.log(name, stoneValue)
    setMeasurements({...measurements, stones: stoneValue})
  }
  const poundsChangeHandler = (e) => {
    const name = e.target.name
    const poundsValue = Number(e.target.value);
    console.log(name, poundsValue)
    setMeasurements({...measurements, pounds: poundsValue})
  }

  useEffect(() => {

  convertHeight()    
  convertWeight()
  }, [measurements])
  // const weightHandler = (e) => {
  //   const value = e.target.value;
  //   const name = e.target.name;
  //   if (name === 'st') {
  //     console.log(name);
      
  //     stones = parseInt(value);
  //   }
  //   if (name === 'lbs') {
  //     console.log(name);
  //     pounds = parseInt(value);
  //   }
  //   convertWeight();
  // };

  return (
    <div className="imperial-stats">
      <label className="imperial-height">
        Height
        <br />
        <div className="label-container">
          <input className="imperial-height-input" type="number" name="feet" onChange={feetChangeHandler} ref={feetRef} />
          <span className="imperial-label" id="label-left">
            ft
          </span>
          <input className="imperial-height-input" type="number" name="inches" onChange={inchesChangeHandler} ref={inchesRef} />
          <span className="imperial-label" id="label-right">
            in
          </span>
        </div>
      </label>


      <label className="imperial-weight">
        Weight
        <br />
        <div className="label-container">
          <input className="imperial-weight-input" type="number" name="stones" onChange={stonesChangeHandler} ref={stonesRef} />
          <span className="imperial-label" id="label-left">
            st
          </span>
          <input className="imperial-weight-input" type="number" name="pounds" onChange={poundsChangeHandler}  ref={poundsRef} />
          <span className="imperial-label" id="label-right">
            lbs
          </span>
        </div>
      </label>
    </div>
  );
};

export default ImperialStats;
