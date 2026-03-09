import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './exercises/exe02/Header'
import { tasks } from './exercises/exe02/tasks'
import Button from './exercises/exe02/Button'

function App() {
  const [count, setCount] = useState(0)
  const [lastTask, setLastTask] = useState('')

  return (
    <>
      <div>
        <Header title='Minhas Tarefas'/>
      </div>

      <div>
        {tasks.map(t => (
          <div key={t.id}>
            <p>{t.title}</p>
            <Button 
              label='Selecionar' onClick={() => setLastTask(t.title)}
            />
          </div>))}
      </div>

      <div>
        <p>Última tarefa clicada</p>
        {lastTask}
      </div>
    </>
  )
}

export default App
