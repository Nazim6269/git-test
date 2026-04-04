import React from 'react'

const Button = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div>{count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Button