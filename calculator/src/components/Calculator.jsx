import React, { useContext } from 'react'
import Buttons from './Buttons'
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';


import { ContextCalc } from '../store/storeCalculations'


import '../Css/calculator.css'

const Calculator = () => {

  const [state, setState] = useContext(ContextCalc)
  return (
    <Box m={6}>
      <Container maxWidth="xs">
        <Box sx={{
          width: 400,
          borderRadius: '1rem',
          textAlign: 'center',
          height: 100,
          backgroundColor: '#FBC02D',
        }}>
          <Typography variant='h4' sx={{
            textShadow: '0.1em 0.1em #FFF',
            fontWeight: 'bold',
            color: '#FF6F00',
            fontStyle: 'italic',
            fontFamily: 'Fantasy',
          }}> Calculator
          </Typography>
        </Box>
        <div className='calculator'>
          <h1 className='result'> {state.num} </h1>
          <Buttons />
        </div>
      </Container>
    </Box >
  )
}

export default Calculator
