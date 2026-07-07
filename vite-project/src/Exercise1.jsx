import { useState } from 'react'

const Button = ({onClick , text}) => {
  return <button onClick={onClick}>{text}</button>
}

const StatisticLine = ({text , value}) => {
  return(
  <tr>
      <td>{text}</td>
      <td>{value}</td>
  </tr>
  )
}
const Statistics = ({good , bad , neutral}) => {
    const total =  good + bad + neutral

   const average = () => {
    if (total === 0) return 0
      return (good - bad) / total
  }

  const positivePercentage = () => {
    if (total === 0) return 0
      return (good / total) * 100
  }
  
  if(total === 0){
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="total" value={total} />
      <StatisticLine text="average" value={average()} />
      <StatisticLine text="positive" value={positivePercentage() + ' %'} />
        </tbody>
      </table>
    </div>
  )
}

const Exercise1 = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodResponse = () => {
      setGood(good + 1);
      // console.log(good);
  }

  const handleNeutralResponse = () => {
      setNeutral(neutral + 1);
      // console.log(neutral);
  }

  const handleBadResponse = () => {
      setBad(bad + 1);
      // console.log(bad);
  }
  return (
    <div>
        <h1>give feedback</h1>

        <Button onClick={handleGoodResponse} text="good" />
        <Button onClick={handleNeutralResponse} text="neutral" />
        <Button onClick={handleBadResponse} text="bad" />

          <Statistics good={good} bad={bad} neutral={neutral}/>
        
    </div>
  )
}

export default Exercise1