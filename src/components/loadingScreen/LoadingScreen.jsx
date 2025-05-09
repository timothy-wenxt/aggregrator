import React from 'react'
import './LoadingScreen.scss'

const LoadingScreen = () => {
  return (
    <div className="redirect-container">
    <div className="loader"></div>
    <p>
      You will be re-directed to respective<br />
      <strong>banking application</strong><br />
      don’t close the window
    </p>
  </div>


  )
}

export default LoadingScreen