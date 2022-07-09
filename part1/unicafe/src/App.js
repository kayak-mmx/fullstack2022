import {useState} from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const StatisticLine = (props) => (
  <p>{props.statisticName} {props.statisticValue}</p>
)

const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let totalFeedback = good + neutral + bad
  let average = (totalFeedback === 0)? 0: (good - bad)/totalFeedback
  let positive = (totalFeedback === 0)? 0: good/totalFeedback

  const setFeedback = (option, newValue) => {
    //console.log('option', option)
    if (option === "good")
    {
      setGood(newValue)
    }
    else if (option === "neutral")
    {
      setNeutral(newValue)
    }
    else if (option === "bad")
    {
      setBad(newValue)
    }        
  }

  if (totalFeedback > 0)
  {
    return (
      <div>
        <h1>Please give feedback</h1>
        <Button handleClick={() => setFeedback("good", good + 1)} text="Good" />
        <Button handleClick={() => setFeedback("neutral", neutral + 1)} text="Neutral" />
        <Button handleClick={() => setFeedback("bad", bad + 1)} text="Bad" />
        <h1>Statistics</h1>
        <StatisticLine statisticName={"Good"} statisticValue={good} />
        <StatisticLine statisticName={"Neutral"} statisticValue={neutral} />
        <StatisticLine statisticName={"Bad"} statisticValue={bad} />
        <StatisticLine statisticName={"All"} statisticValue={totalFeedback} />
        <StatisticLine statisticName={"Average"} statisticValue={average} />
        <StatisticLine statisticName={"Positive"} statisticValue={positive} />
      </div>
    );  
  }
  else
  {
    return (
      <div>
        <h1>Please give feedback</h1>
        <Button handleClick={() => setFeedback("good", good + 1)} text="Good" />
        <Button handleClick={() => setFeedback("neutral", neutral + 1)} text="Neutral" />
        <Button handleClick={() => setFeedback("bad", bad + 1)} text="Bad" />
        <h1>Statistics</h1>
        <h3>No feedback given</h3>
      </div>
    );  

  }
}

export default App;
