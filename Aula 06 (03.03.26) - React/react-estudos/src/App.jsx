import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './exercises/exe08/Header'
import CourseItem from './exercises/exe08/CourseItem'
import { courses } from './exercises/exe08/courses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header title='Lista de Cursos'/>
      </div>

      <div>
        {courses.map(c => (
          <CourseItem
            key={c.id}
            title={c.title}
            duration={c.duration}
          />
        ))}
      </div>
    </>
  )
}

export default App