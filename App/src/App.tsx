import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './public/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Log In</a></li>
          <li><a href="#">Sign Up</a></li>
        </ul>
      </nav>

      <header>
        <h1>Business Card Generator</h1>
        <h2>Lorem ipsum</h2>
      </header>

      <div>
        <button>Log In</button>
        <button>Sign Up</button>
      </div>

    </div>
    </>
  )
}

export default App
