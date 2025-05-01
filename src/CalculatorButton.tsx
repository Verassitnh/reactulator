import { useState } from 'react'

interface CalculatorButtonProps {
    character: string,
    calculationString: string
    setCalculationString: React.Dispatch<React.SetStateAction<string>>,
    clear: boolean
}


export function CalculatorButton(props: CalculatorButtonProps) {

    return (
        <button className="calculatorButton" onClick={() => props.setCalculationString(props.clear ? "" : (props.calculationString + props.character))}>
            {props.character}
        </button>
    )
}

export default CalculatorButton