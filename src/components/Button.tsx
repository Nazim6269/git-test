import React from 'react'

const Button = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div>{count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>This line is added by nazimTwo</p>
    </div>
  )
}

export default Button