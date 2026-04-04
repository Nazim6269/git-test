import React, { useState } from 'react'

const Button = () => {
<<<<<<< HEAD
  const [count, setCount] = React.useState(0)
  return (
    <div>{count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>This line is added by nazimTwo</p>
=======
  const [count, setCount] = useState(0)
  return (
    <div>{count}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
>>>>>>> f85c48d (add a counter)
    </div>
  )
}

export default Button