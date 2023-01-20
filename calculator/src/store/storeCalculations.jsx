import React, {useState} from "react";

const initialState = {
    num: 0,
}

export const ContextCalc = React.createContext();

const Store = ({ children }) => {
    const [state, setState] = useState(initialState);
    const [oldState, setOldState] = useState();
    const [operator, setOperator] = useState();

    const percent = () => {
        setState({num: state.num / 100})
      } 

    const add = () => {
        setState({num: parseInt(oldState) + parseInt(state.num)})
    }

    const subtraction = () => {
        setState({num: oldState - state.num})
    }

    const division = () => {
        setState({num: oldState / state.num})
    }

    const multiplication = () => {
        setState({num: oldState * state.num})
    }

    const operatorHandler = (e) => {
        const operatorInput = e.target.value
        setOperator(operatorInput)
        setOldState(state.num)
        setState({num: 0})
    }

    const calculate = () => {
        if(operator === "+") {
            return add()
        }
        else if (operator === "-") {
            return subtraction()
        }
        else if (operator === "x") {
            return multiplication()
        }
        else if (operator === "÷") {
            return division()
        }
    }

      const signal = () => {
        if(state.num>0){
            setState({num: -state.num})
        }
        else{
            setState({num: Math.abs(state.num)})
        }
      }



    return (
        <ContextCalc.Provider value={[state, setState, percent, signal, operatorHandler, calculate]}> {children} </ContextCalc.Provider>
    );
};

export default Store