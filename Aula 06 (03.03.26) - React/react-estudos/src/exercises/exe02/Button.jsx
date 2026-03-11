function Button({ label, ...rest }) {
    return (
        <button {...rest}>{label}</button>
    )
};

export default Button;

/*
  const [lastTask, setLastTask] = useState('')

  function handlerSelectTask(title) {
    setLastTask(title)
  }
  
      <div>
        {tasks.map(t => (
          <div key={t.id}>
            <p>{t.title}</p>
            <Button 
              label='Selecionar' onClick={() => handlerSelectTask(t.title)}
            />
          </div>))}
      </div>

      <div>
        <p>Última tarefa clicada</p>
        {lastTask}
      </div>
*/