interface RadioInputProps {
  className: string;
  unitIn: string;
  setUnit: (e: React.ChangeEvent<HTMLInputElement>) => void;
  check: string;
}

const RadioInput:React.FC<RadioInputProps> = ({ className, unitIn, setUnit, check }) => {
  return (
    <label htmlFor={unitIn} className="unit">
      {unitIn.charAt(0).toUpperCase() + unitIn.slice(1)}
      <input
        type="radio"
        id={unitIn}
        name="units"
        value={unitIn}
        onChange={setUnit}
        checked={check == unitIn && true}
      />
      <span className="circle"></span>
    </label>
  );
};

export default RadioInput;
