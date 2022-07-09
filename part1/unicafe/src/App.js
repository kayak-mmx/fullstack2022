import {useState} from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)


const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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

  return (
    <div>
      <h1>Please give feedback</h1>
      <Button handleClick={() => setFeedback("good", good + 1)} text="Good" />
      <Button handleClick={() => setFeedback("neutral", neutral + 1)} text="Neutral" />
      <Button handleClick={() => setFeedback("bad", bad + 1)} text="Bad" />
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  );
}

export default App;
