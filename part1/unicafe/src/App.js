import {useState} from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics = (props) => (
  <div>
    <p>Good {props.good}</p>
    <p>Neutral {props.neutral}</p>
    <p>Bad {props.bad}</p>
    <p>All {props.totalFeedback}</p>
    <p>Average {props.average}</p>
    <p>Positive {props.positive} %</p>
  </div>
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
        <Statistics good={good} neutral={neutral} bad={bad} totalFeedback={totalFeedback} average={average} positive={positive} />
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
