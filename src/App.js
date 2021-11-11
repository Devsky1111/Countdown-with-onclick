
import './App.css';
import React from 'react'
import { useState, useEffect, useRef } from 'react'
function App() {
  const [countdown, setCountdown] = useState(4000)
  let id = useRef()
  function getCoundown(ms) {

    let day = Math.floor(ms / 86400)
    let hours = Math.floor((ms % 86400) / 3600)
    let min = Math.floor((ms % 86400 % 3600) / 60)
    let second = ms % 86400 % 3600 % 60
    console.log(day, hours, min, second)
    return {
      day, hours, min, second
    }
  }
  console.log('re-render o ca day')
  function handleClick() {
    id.current = setInterval(() => {
      setCountdown((prevcountdown) => {
        getCoundown(prevcountdown - 1)
        return prevcountdown - 1
      })
      console.log(id)
    }, 1000)
  }

  function stophandle() {
    clearInterval(id.current)
  }


  return (
    <div>
      Bắt đầu đếm ngược: <span>{countdown} s</span>
      <div>
        <button onClick={handleClick}>Start</button>
        <button onClick={stophandle}>Stop</button>

      </div>

      <div className="clockCountdown">
        <div className="background-clock">
          <div className="clock-times">{getCoundown(countdown).day}</div>
          <div className="clock-times">:</div>
          <div className="clock-times">{getCoundown(countdown).hours}</div>
          <div className="clock-times">:</div>
          <div className="clock-times">{getCoundown(countdown).min}</div>
          <div className="clock-times">:</div>
          <div className="clock-times">{getCoundown(countdown).second}</div>
          <div className="clock-desc">Days</div>
          <div className="clock-desc"></div>
          <div className="clock-desc">Hours</div>
          <div className="clock-desc"></div>
          <div className="clock-desc">Minutes</div>
          <div className="clock-desc"></div>
          <div className="clock-desc">Seconds</div>

        </div>
      </div>

    </div>
  )
}

export default App

