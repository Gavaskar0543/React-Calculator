import React ,{useEffect, useState} from 'react';
import Styles from '../Styles/App.module.css'
function App() {
  const [operand1,setOperand1] = useState(0);
  const [operand2,setOperand2] = useState(0);
  const [operator,setOperator] = useState('');
  const [display,setDisplay] = useState(0);
  
  /* The `useEffect` hook is used in React to perform side effects in functional components. In this
  case, the `useEffect` hook is being used to set the initial value of the `display` state to 10.
  The second argument `[]` is an empty dependency array, which means that the effect will only run
  once, when the component mounts. */
  useEffect(() => {
    setDisplay('');
    
  },[]);
  const handleClearBtn = () =>{
    setDisplay('');
  }
  const handleNum = (e) => {
    const incomeNum = e.target.getAttribute('data-value');
    setDisplay(display + incomeNum);

    if (operator === '*') {
      // Assuming multiplication logic
      const result = parseFloat(display) * parseFloat(incomeNum);
      setDisplay(result.toString());
      setOperator(null); // Clear the operator after using it
    }
   
  };
  const handleOperation = (value) => {
    if (value === '*') {
      setOperator(value);
    }
   
     else if (value === '=') {
      // Perform calculations here based on the operator
      // For example: addition, subtraction, etc.
      // Update the display with the result
     
    }
  };
  return (
   <>
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
     <div>
      +/-
     </div>
     <div>
      %
     </div>
     <div className={Styles.orangeBtn}>
      /
     </div>
     <div onClick={handleNum} data-value={7} >
      7
     </div>
     <div  onClick={handleNum} data-value={8}>
      8
     </div>
     <div>
      9
     </div>
     <div   className={Styles.orangeBtn} onClick={() => handleOperation('*')} >
      x
     </div>
     <div>
      4
     </div>
     <div>
     5
     </div>
     <div>
      6
     </div>
     <div className={Styles.orangeBtn} onClick={() => handleOperation('-')}>
      -
     </div>
     <div>
      1
     </div>
     <div>
      2
     </div>
     <div>
      3
     </div>
     <div className={Styles.orangeBtn}>
      +
     </div>
     <div className={Styles.zero}>
      0
     </div>
     <div className={Styles.nonZero}>
     
     </div>
     <div>
      .
     </div>
     <div  className={Styles.orangeBtn}  onClick={() => handleOperation('=')}>
      =
     </div>
    </div>
   </div>
   </>
  );
}

export default App;
