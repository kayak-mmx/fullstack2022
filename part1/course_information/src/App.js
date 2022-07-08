const Header = (props) => {
  return(
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} numberExercises={props.numExercises1} />
      <Part name={props.part2} numberExercises={props.numExercises2} />
      <Part name={props.part3} numberExercises={props.numExercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.numberExercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} numExercises1={exercises1} part2={part2} numExercises2={exercises2} part3={part3} numExercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />      
    </div>
  );
}

export default App;
