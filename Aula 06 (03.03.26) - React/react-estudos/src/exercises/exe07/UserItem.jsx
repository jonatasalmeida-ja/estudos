import { useState } from "react";
import Button from "./Button";

function UserItem({ name, age }) {
    const [showUser, setShowUser] = useState(false)
    
    function handleToggle(){
        setShowUser(!showUser);
    }

    return (
        <div>
            <p>{name}</p>

            <Button
                label={'Ver Idade'}
                onClick={handleToggle}
            />

            {showUser && (
                <p>Idade: {age}</p>
            )}
        </div>
    );
};

export default UserItem

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header title={'Lista de Usuários'}/>
      </div>

      <div>
        {users.map(usr => (
          <UserItem
            key={usr.id}
            name={usr.name}
            age={usr.age}
          />
        ))}
      </div>
    </>
  )
}
*/