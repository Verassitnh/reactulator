interface ScreenProps {
    calculationString: string
}

export function Screen(props: ScreenProps) {

    function tryEvaluation() {
        try {
            return eval(props.calculationString)
        } catch (e) {
            console.log(e)
            return "invalid math"
        }

    }
    
    return <div className="screen" >{props.calculationString} = {tryEvaluation()}</div>
}


export default Screen