import Header from './components/Header';
import BMICalculatorBox from './components/BMIBox/BMICalculatorBox';
import Meaning from './components/Meaning/Meaning';
import Limitations from './components/Limitations/Limitations';
import './styles/App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <BMICalculatorBox />
      <Meaning />
      <Limitations />
    </div>
  );
}

export default App;
