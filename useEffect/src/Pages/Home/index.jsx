import React from 'react';
import Calculator from '../../Components/Calculator';
import FakeApiStore from '../../Components/FakeApiStore';
import WeatherApi from '../../Components/WeatherApi';
import Footer from '../../Layout/Footer';
import Navbar from '../../Layout/Navbar';

const Home = () => {
  const calculator = Calculator();

  return (
    <>
      <Navbar />
      <FakeApiStore />
      <WeatherApi />
      <Footer />
      <p>{calculator.result}</p>
      <input type="number" value={calculator.num1} onChange={calculator.handleNum1} />
      <input type="number" value={calculator.num2} onChange={calculator.handleNum2} />
      <button onClick={calculator.topla}>+</button>
      <button onClick={calculator.cixma}>-</button>
      <button onClick={calculator.vurma}>*</button>
      <button onClick={calculator.bolme}>/</button>
    </>
  );
};

export default Home;
