import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling

import Styles from '../Styles/App.module.css'
function App() {
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [operator, setOperator] = useState('');
  const [display, setDisplay] = useState('');



  const handleClearBtn = () => {
    setDisplay('');
    setOperand1(0);
    setOperand2(0);
    setOperator('');
  };
  const handleNum = (e) => {
    if (display.length >= 9) {
      toast.error('limit reached');
      return;
    } else {
      let inputNum = e.target.getAttribute('data-value');
      setDisplay(display === '0' ? inputNum : display + inputNum);

      if (operator !== '') {
        console.log(e.target.getAttribute('data-value'))
        inputNum = e.target.getAttribute('data-value');
        setDisplay(display + inputNum);
        setOperand2(parseFloat(display + inputNum));

      }
    }
  };
  const handleOperation = (value) => {
    if (value === '*' || value === '-' || value === '+' || value === '/') {
      setOperator(value);
      setOperand1(parseFloat(display));
      setDisplay('');

    }
  };

  const EqualsToOperations = () => {
    if (operator === '+') {
      console.log(operand1, operand2, operator)
      setDisplay((operand1 + operand2).toString());
    } else if (operator === '-') {
      console.log(operand1, operand2, operator)
      setDisplay((operand1 - operand2).toString());
    } else if (operator === '*') {
      console.log(operand1, operand2, operator)
      setDisplay((operand1 * operand2).toString());
    } else if (operator === '/') {
      console.log(operand1, operand2, operator)
      setDisplay((operand1 / operand2).toString());
    }
    setOperand1(0);
    setOperand2(0);
    setOperator('');
  };
  const handlePercentage = () => {
    if(display.length == 0){
      toast.error("No value entered!")
      return;
    }
    const percentageValue = parseFloat(display) / 100;
    setDisplay(percentageValue.toString());
    if (operator !== '') {
      setOperand2(percentageValue);
    } else {
      setOperand1(percentageValue);
    }
  };
  const handleToggleSign = () => {
    setDisplay((-parseFloat(display)).toString());
    if (operator !== '') {
      setOperand2(parseFloat(display));
    } else {
      setOperand1(-parseFloat(display));
    }
  };
  return (
    <>
    <div className={Styles.App}>
      <div className={Styles.calBody}>
        <div className={Styles.disContainer}>
          <div>
            {display}
          </div>
        </div>
        <div className={Styles.buttons}>
          <div onClick={handleClearBtn}>
            c
          </div >
          <div onClick={handleToggleSign}>
            +/-
          </div>
          <div onClick={handlePercentage}>
            %
          </div>
          <div className={Styles.orangeBtn} onClick={() => handleOperation('/')}>
            /
          </div>
          <div onClick={handleNum} data-value={7} >
            7
          </div>
          <div onClick={handleNum} data-value={8}>
            8
          </div>
          <div onClick={handleNum} data-value={9}>
            9
          </div>

          <div className={Styles.orangeBtn} onClick={() => handleOperation('*')} >
            x
          </div>
          <div onClick={handleNum} data-value={4}>
            4
          </div>
          <div onClick={handleNum} data-value={5}>
            5
          </div>
          <div onClick={handleNum} data-value={6}>
            6
          </div>
          <div className={Styles.orangeBtn} onClick={() => handleOperation('-')}>
            -
          </div>
          <div onClick={handleNum} data-value={1}>
            1
          </div>
          <div onClick={handleNum} data-value={2}>
            2
          </div>
          <div onClick={handleNum} data-value={3}>
            3
          </div>
          <div className={Styles.orangeBtn} onClick={() => handleOperation('+')}>
            +
          </div>
          <div className={Styles.zero} onClick={handleNum} data-value={0}>
            0
          </div>
          <div className={Styles.nonZero} onClick={handleNum} data-value={0}>

          </div>
          <div onClick={handleNum} data-value={"."}>
            .
          </div>
          <div className={Styles.orangeBtn} onClick={EqualsToOperations}>
            =
          </div>
        </div>
      </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
