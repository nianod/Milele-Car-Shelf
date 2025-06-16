import { useState } from "react"

const App = () => {

  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>you clicked {count} times</h1>
      <button onClick={() => setCount(count + 500000)}>increment</button>
    </div>
  )
}

export default App
