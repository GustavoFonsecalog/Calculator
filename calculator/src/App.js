import './App.css';
import Calculator from './components/Calculator';
import StoreCalculations from './store/storeCalculations'

function App() {
  return (
    <div className="App">
      <h1>
          Calculadora By Gustavo Fonseca
      </h1>
      <StoreCalculations>
        <Calculator />
      </StoreCalculations>
    </div>
  );
}

export default App;
