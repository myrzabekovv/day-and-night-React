import React, { useState } from 'react'
import './App.css'

function App() {
  const [activeState, setActiveState] = useState(false)

  const DayOrNight = () => {
    setActiveState(!activeState)
  }

  return (
    <div>
      <div
      onClick={DayOrNight}
      className={`container ${activeState ? "night" : ""}`}>
        <div className={`sun ${activeState ? "moon" : ""}`}></div>
      </div>
      {/* <button onClick={DayOrNight}>Night</button> */}
    </div>
  );
}

export default App
