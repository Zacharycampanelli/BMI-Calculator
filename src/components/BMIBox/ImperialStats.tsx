import { useEffect, useState } from 'react';

interface ImperialStatsParams {
  setWeight: React.Dispatch<React.SetStateAction<number>>;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
}

interface Measurement {
  inches: number;
  feet: number;
  pounds: number;
  stones: number;
}

const ImperialStats: React.FC<ImperialStatsParams> = ({ setWeight, setHeight}) => {
  const [measurements, setMeasurements] = useState<Measurement>({
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
    const convertedStones = measurements.stones;
    const convertedPounds = measurements.pounds;
    const total = convertedStones * 14 + convertedPounds;
    setWeight(total);
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const value = Number(e.target.value);
    setMeasurements({ ...measurements, [type]: value });
  }

  useEffect(() => {
    convertHeight();
    convertWeight();
  }, [measurements]);

  return (
    <div className="imperial-stats">
      <label className="imperial-height">
        <p>Height</p>
        <div className="label-container">
          <input
            className="imperial-height-input"
            type="number"
            name="feet"
            placeholder="0"
            onChange={(e) => inputChangeHandler(e, 'feet')}
          />
          <span className="imperial-label" id="label-left">
            ft
          </span>
          <input
            className="imperial-height-input"
            type="number"
            name="inches"
            placeholder="0"
            onChange={(e) => inputChangeHandler(e, 'inches')}
          />
          <span className="imperial-label" id="label-right">
            in
          </span>
        </div>
      </label>

      <label className="imperial-weight">
        <p>Weight</p>
        <div className="label-container">
          <input
            className="imperial-weight-input"
            type="number"
            name="stones"
            placeholder="0"
            onChange={(e) => inputChangeHandler(e, 'stones')}
          />
          <span className="imperial-label" id="label-left">
            st
          </span>
          <input
            className="imperial-weight-input"
            type="number"
            name="pounds"
            placeholder="0"
            onChange={(e) => inputChangeHandler(e, 'pounds')}
          />
          <span className="imperial-label" id="label-right">
            lbs
          </span>
        </div>
      </label>
    </div>
  );
};

export default ImperialStats;
