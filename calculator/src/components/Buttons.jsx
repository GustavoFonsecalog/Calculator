import React, {useContext} from 'react'

import { ContextCalc } from '../store/storeCalculations'

import '../Css/buttons.css'



const Buttons = () => {

  const [state, setState, percent, signal, operatorHandler, calculate] = useContext(ContextCalc)

  const Clear = () => {
    setState({num: 0})
  }

  const inputNum = (e) => {

    var inputValue = e.target.value
    if(state.num === 0) {
      setState({num: inputValue})
    }

    else {
      setState({num: state.num + inputValue})
    } 
  }

  return (
    <div>
      <button className="clear light-grey" onClick={Clear}>AC</button>

      <button className="light-grey" onClick={signal}>+/-</button>

      <button className="light-grey" onClick={percent}>%</button>

      <button className="orange" onClick={operatorHandler} value={'÷'}>÷</button>

      <button className="numbers dark-grey" onClick={inputNum} value={7}> 7 </button>
      <button className="numbers dark-grey" onClick={inputNum} value={8}> 8 </button>
      <button className="numbers dark-grey" onClick={inputNum} value={9}> 9 </button>

      <button className="orange" onClick={operatorHandler} value={'x'}>x</button>

      <button className="numbers dark-grey" onClick={inputNum} value={4}> 4 </button>
      <button className="numbers dark-grey" onClick={inputNum} value={5}> 5 </button>
      <button className="numbers dark-grey" onClick={inputNum} value={6}> 6 </button>

      <button className="orange" onClick={operatorHandler} value={'-'}>-</button>

      <button className="numbers dark-grey" onClick={inputNum} value={1}> 1 </button>
      <button className="numbers dark-grey" onClick={inputNum} value={2}> 2 </button>
      <button className="numbers dark-grey" onClick={inputNum} value={3}> 3 </button>

      <button className="orange" onClick={operatorHandler} value={'+'}>+</button>

      <button className="numbers numberZero dark-grey" onClick={inputNum} value={0}> 0 </button>

      <button className="dark-grey" onClick={inputNum} value={','}>,</button>

      <button className="orange" onClick={calculate}>=</button>
    </div>
  )
}

export default Buttons
