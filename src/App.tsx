import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [injectTo, setInjectTo] = useState("");
  const [inject, setInject] = useState("");

  function handleSave() {
    chrome.storage.sync.set({ inject ,injectTo});

  }

  return (
    <>
      <div className="grid grid-rows-1 grid-cols-2">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Build with Vite + React</h1>
      <div className="card">
        <form className="flex flex-col " action="">
          <div className="flex m-2 p-1">
            <label className="m-1" htmlFor="insert">Inject To:</label>
            <input onChange={(e) => { setInjectTo(e.target.value) }} id="insert" type="url"></input>
          </div>
          <div className="flex m-2 p-1">
            <label className="m-1" htmlFor="display">Inject:</label>
            <input  onChange={(e) => { setInject(e.target.value) }} id="display" type="url"></input>
          </div>
        </form>
        <button onClick={handleSave}>
          Save
        </button>

      </div>

    </>
  )
}

export default App
