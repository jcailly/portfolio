import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className="w-screen min-h-screen flex bg-red-500 w-100%">
      <div className="flex">
        <a href="https://vite.dev" target="_blank" className="w-1/2">
          <img src={viteLogo} className="logo mx-auto" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="w-1/2">
          <img src={reactLogo} className="logo-react mx-auto" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </section>
  </>
  )
}

export default App
