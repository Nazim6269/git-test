import React, { useState } from 'react'

const Button = () => {
  const [count, setCount] = useState(0)
  return (
    <div>{count}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </div>
  )
}

export default Button