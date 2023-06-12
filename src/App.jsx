import Header from './components/Header';
import BMICalculatorBox from './components/BMIBox/BMICalculatorBox';
import Meaning from './components/Meaning/Meaning';
import './styles/App.scss';
import Limitations from './components/Limitations/Limitations';

function App() {
  return (
    <>
      <Header />
      <BMICalculatorBox />
      <Meaning />
      <Limitations />
    </>
  );
}

export default App;
