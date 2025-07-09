import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
        <Home />
    </>
  )
}

export default App
