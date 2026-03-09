function Button({ label, ...rest }) {
    return (
        <button {...rest}>{label}</button>
    )
}

export default Button
/*
      <div>
        <h2>Contador: {count}</h2>
        <Button label='Somar' onClick={() => setCount(count + 1)}/>
        <Button label='Subtrair' onClick={() => setCount(count - 1)}/>
      </div>
*/