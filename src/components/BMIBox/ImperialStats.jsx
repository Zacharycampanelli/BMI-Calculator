import { useEffect, useState } from 'react';

const ImperialStats = ({ setWeight, setHeight }) => {
  const [measurements, setMeasurements] = useState({
    inches: 0,
    feet: 0,
    pounds: 0,
    stones: 0,
  });

  const convertHeight = () => {
    const convertedFeet = measurements.feet;
    const convertedInches = measurements.inches;
    const total = convertedFeet * 12 + convertedInches;
    setHeight(total);
  };

  const convertWeight = () => {
    const convertedStones = parseInt(measurements.stones);
    const convertedPounds = parseInt(measurements.pounds);
    const total = convertedStones * 14 + convertedPounds;
    setWeight(total);
  };

  const feetChangeHandler = (e) => {
    const name = e.target.name;
    const feetValue = Number(e.target.value);
    setMeasurements({ ...measurements, feet: feetValue });
  };
  const inchesChangeHandler = (e) => {
    const name = e.target.name;
    const inchValue = Number(e.target.value);
    setMeasurements({ ...measurements, inches: inchValue });
  };

  const stonesChangeHandler = (e) => {
    const name = e.target.name;
    const stoneValue = Number(e.target.value);
    setMeasurements({ ...measurements, stones: stoneValue });
  };
  const poundsChangeHandler = (e) => {
    const name = e.target.name;
    const poundsValue = Number(e.target.value);
    setMeasurements({ ...measurements, pounds: poundsValue });
  };

  useEffect(() => {
    convertHeight();
    convertWeight();
  }, [measurements]);

  return (
    <div className="imperial-stats">
      <label className="imperial-height">
        Height
        <br />
        <div className="label-container">
          <input className="imperial-height-input" type="number" name="feet" onChange={feetChangeHandler} />
          <span className="imperial-label" id="label-left">
            ft
          </span>
          <input className="imperial-height-input" type="number" name="inches" onChange={inchesChangeHandler} />
          <span className="imperial-label" id="label-right">
            in
          </span>
        </div>
      </label>

      <label className="imperial-weight">
        Weight
        <br />
        <div className="label-container">
          <input className="imperial-weight-input" type="number" name="stones" onChange={stonesChangeHandler} />
          <span className="imperial-label" id="label-left">
            st
          </span>
          <input className="imperial-weight-input" type="number" name="pounds" onChange={poundsChangeHandler} />
          <span className="imperial-label" id="label-right">
            lbs
          </span>
        </div>
      </label>
    </div>
  );
};

export default ImperialStats;
