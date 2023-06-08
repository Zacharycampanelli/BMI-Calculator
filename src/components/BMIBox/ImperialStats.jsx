const ImperialStats = ({ setWeight, setHeight, weight, height }) => {
  let feet, inches, stones, pounds;

  const convertHeight = () => {
    if (feet && inches) {
      const convertedFeet = feet;
      const convertedInches = inches;
      const total = convertedFeet * 12 + convertedInches;
      console.log(convertedFeet, convertedInches);

      setHeight(total);
    }
  };

  const convertWeight = () => {
    const convertedStones = stones;
    const convertedPounds = pounds;
    console.log(convertedStones, convertedPounds);
    const total = convertedStones * 14 + convertedPounds;
    console.log(total);
    setWeight(total);
  };

  const heightHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === 'ft') feet = parseInt(value);
    if (name === 'in') inches = parseInt(value);
    convertHeight();
  };

  const weightHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === 'st') {
      console.log(name);
      
      stones = parseInt(value);
    }
    if (name === 'lbs') {
      console.log(name);
      pounds = parseInt(value);
    }
    convertWeight();
  };

  return (
    <div className="imperial-stats">
      <label className="imperial-height">
        Height
        <br />
        <div className="label-container">
          <input className="imperial-height-input" type="number" name="ft" onChange={heightHandler} />
          <span className="imperial-label" id="label-left">
            ft
          </span>
          <input className="imperial-height-input" type="number" name="in" onChange={heightHandler} />
          <span className="imperial-label" id="label-right">
            in
          </span>
        </div>
      </label>

      <label className="imperial-weight">
        Weight
        <br />
        <div className="label-container">
          <input className="imperial-weight-input" type="number" name="st" onChange={weightHandler} />
          <span className="imperial-label" id="label-left">
            st
          </span>
          <input className="imperial-weight-input" type="number" name="lbs" onChange={weightHandler} />
          <span className="imperial-label" id="label-right">
            lbs
          </span>
        </div>
      </label>
    </div>
  );
};

export default ImperialStats;
