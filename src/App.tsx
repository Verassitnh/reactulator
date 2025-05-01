
import { useState } from 'react'
import './App.css'

import CalculatorButton from './CalculatorButton.tsx'
import Screen from './Screen.tsx'

function App() {
  const [calculationString, setCalculationString] = useState("")
  const buttonCharacters = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "C"
  ]


  return (
    <>
      <h1>
        React Calculator Demo
      </h1>
      <Screen calculationString={calculationString}></Screen>
      <div className="buttongrid">
        {buttonCharacters.map((v) => <CalculatorButton character={v} clear={v == "C"} calculationString={calculationString} setCalculationString={setCalculationString} />)}
      </div>

    </>
      
  )
}

export default App
