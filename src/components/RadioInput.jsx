const RadioInput = ({unitIn, setUnit, check}) => {

    return (
       <label htmlFor={unitIn}  className="unit">{unitIn.charAt(0).toUpperCase() + unitIn.slice(1)}
        <input type="radio" id={unitIn} name="units" value={unitIn} onChange={setUnit} checked={check == unitIn && true}/>
        <span className="circle"></span>
        </label>
  )
}

export default RadioInput
