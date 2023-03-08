import React from 'react'
import './App.css'

const DayOrNight = () => {
  sun.classList.toggle('moon')
 container.classList.toggle('night')
  if (sun.classList.contains('moon') || container.classList.contains('night')) {
    button.textContent = 'Включить день'
  } else {
    button.textContent = 'Включить ночь'
  }
}

function App() {

  return (
    <div>
      <div className="container">
        <div className="sun"></div>
      </div>
      <button onClick={DayOrNight}>Night</button>
    </div>
  )
}

export default App
