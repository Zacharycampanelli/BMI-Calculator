import {useState} from 'react'

const ImperialStats = ({ setWeight, setHeight }) => {
    const [imperialHeight, setImperialHeight] = useState({
      ft: 0,
      in: 0
    })  
    const [imperialWeight, setImperialWeight] = useState({
      st: 0,
      lbs: 0
    })  
    
    const convertHeight = async () => {
      const feet = imperialHeight.ft;
      const inches = imperialHeight.in;
      const total = (feet * 12) + inches;
      await setHeight(total)
    }

    const convertWeight = () => {
      const stone = imperialWeight.st;
      const pounds = imperialWeight.lbs;
      const total = (stone * 14) + pounds;
      setWeight(total)
    }

    const heightHandler = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setImperialHeight({
        ...imperialHeight,
        [name]: parseInt(value)
      })
      convertHeight()
    }

    const weightHandler = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setImperialWeight({
        ...imperialWeight,
        [name]: parseInt(value)
      })
      convertWeight()
    }

  return (
    <div className='imperial-stats'>
      
      <label className='imperial-height'>Height<br/>
      <div className="label-container">
        <input className='imperial-height-input' type='number' name="ft" onBlur={heightHandler}/>
        <span className='imperial-label' id="label-left">ft</span>
        <input className='imperial-height-input' type='number' name="in" onBlur={heightHandler}/>
        <span className='imperial-label' id="label-right">in</span>
        </div>
      </label>
      
      <label className='imperial-weight'>Weight<br/>
      <div className="label-container">

        <input className='imperial-weight-input' type='number' name="st" onBlur={weightHandler}/>
        <span className='imperial-label'  id="label-left">st</span>
        <input className='imperial-weight-input' type='number' name="lbs" onBlur={weightHandler}/>
        <span className='imperial-label' id="label-right">lbs</span>
      </div>
      </label>
    </div>
  )
}

export default ImperialStats
