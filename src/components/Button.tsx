import React, { useState } from 'react'

const Button = () => {
  const [coutn, setCount] = useState(0)
  return (
    <div>{coutn}
      <button onClick={() => setCount(coutn + 1)}>Increment</button>
      <button onClick={() => setCount(coutn - 1)}>Decrement</button>
    </div>
  )
}

export default Button