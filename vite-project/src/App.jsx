import Anecdote from "./Anecdote"
import Exercise1 from "./Exercise1"
const Header = ({course}) => {
  console.log(course)  
  return (
    <h1>{course}</h1>
  )
}

const Part = ({part}) => {
  console.log(part)
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Content = ({part}) => {
  return (
    <div>
      <Part part={part[0]} />
      <Part part={part[1]} />
      <Part part={part[2]} />
    </div>
  )
}

const Total = ({ part}) => {
  return (
    <p>Number of exercises {part[0].exercises + part[1].exercises + part[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    part: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
    <div>
      <Header course={course.name}/>
      <Content part={course.part} />
      {/* <Total part={course.part} /> */}

    <div> Exercise 1.6</div>
      <Exercise1 />
    </div>

    {/* i am styling this anecdote to make it different from other components */}
    <div>
      <Anecdote />
    </div>
    </>
  )
}

export default App