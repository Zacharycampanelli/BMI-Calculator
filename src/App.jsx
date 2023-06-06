import { useState } from 'react';

import Header from './components/Header';
import BMICalculatorBox from './components/BMIBox/BMICalculatorBox';

import './styles/App.scss';

function App() {
  return (
    <>
      <Header />
      <BMICalculatorBox />
    </>
  );
}

export default App;
