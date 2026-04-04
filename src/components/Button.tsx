import React from 'react'

const Button = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div>{count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Add a paragraph to practice cherry pick</p>
      <p>Add an another paragraph  for checking cherry pick</p>
    </div>
  )
}

export default Button