import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNum1 = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2 = (e) => {
    setNum2(e.target.value);
  };

  const topla = () => {
    setResult(parseInt(num1) + parseInt(num2));
  };

  const cixma = () => {
    setResult(num1 - num2);
  };

  const vurma = () => {
    setResult(num1 * num2);
  };

  const bolme = () => {
    setResult(num2 !== 0 ? num1 / num2 : alert('0-a bolme yoxdur'));
  };

  return {
    num1,
    num2,
    result,
    handleNum1,
    handleNum2,
    topla,
    cixma,
    vurma,
    bolme,
  };
};

export default Calculator;
