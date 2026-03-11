function Button({ label, ...rest }) {
    return (
        <button {...rest}>{label}</button>
    );
};

export default Button;

/*
const [lastUser, setLastUser] = useState('')

function handleLastUser(user) {
  setLastUser(user)
}

  return (
    <>
      <div>
        {users.map(usr =>
          <div key={usr.id}>
            <p>{usr.name}</p>
            <Button label='Selecionar' onClick={() =>
              handleLastUser(usr.name)
            }/>
          </div>
        )}
      </div>

      <div>
        <p>Usuário selecionado</p>
        {lastUser || 'Nenhum usuário selecionado'}
      </div>
*/