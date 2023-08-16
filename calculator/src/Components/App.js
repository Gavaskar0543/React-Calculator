import React ,{useEffect, useState} from 'react';
import Styles from '../Styles/App.module.css'
function App() {
  const [operand1,setOperand1] = useState(0);
  const [operand2,setOperand2] = useState(0);
  const [operator,setOperator] = useState('');
  const [display,setDisplay] = useState('');
  
  /* The `useEffect` hook is used in React to perform side effects in functional components. In this
  case, the `useEffect` hook is being used to set the initial value of the `display` state to 10.
  The second argument `[]` is an empty dependency array, which means that the effect will only run
  once, when the component mounts. */
  useEffect(() => {
    setDisplay();
  },[]);
  const handleClearBtn = () =>{
    setDisplay('');
  }
  const handleNum = (num) => {
    console.log(num)
  }
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
     <div onClick={ () => handleNum(7)} >
      7
     </div>
     <div>
      9
     </div>
     <div>
      7
     </div>
     <div className={Styles.orangeBtn}>
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
     <div className={Styles.orangeBtn}>
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
     <div  className={Styles.orangeBtn}>
      =
     </div>
    </div>
   </div>
   </>
  );
}

export default App;
