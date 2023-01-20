import React, { useContext } from 'react'
import Buttons from './Buttons'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';


import { ContextCalc } from '../store/storeCalculations'


import '../Css/calculator.css'

const Calculator = () => {

  const [state, setState] = useContext(ContextCalc)
  return (
    <Box m={6}>
      <Container maxWidth="xs">
          <div className='calculator'>
            <h1 className='result'> {state.num} </h1>
            <Buttons />
          </div>
    </Container>
    </Box >
  )
}

export default Calculator
