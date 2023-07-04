import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './public/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
      <header>
        <h1>Business Card Generator</h1>
        <h2>Lorem ipsum</h2>
      </header>

      <div>
        <button>Login</button>
        <button>Sign In</button>
      </div>
    </div>
    </>
  )
}

export default App
