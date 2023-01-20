import { Box } from '@mui/material';
import './App.css';
import Calculator from './components/Calculator';
import StoreCalculations from './store/storeCalculations'

function App() {
  return (
    <div className="App">
      <StoreCalculations>
        <Calculator />
      </StoreCalculations>
    </div>
  );
}

export default App;
