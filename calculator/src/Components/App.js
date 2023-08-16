import React ,{useState} from 'react';
import Styles from '../Styles/App.module.css'
function App() {
  const [operand1,setOperand1] = useState(0);
  const [operand2,setOperand2] = useState(0);
  const [operator,setOperator] = useState('');
  const [display,setDisplay] = useState('');
  return (
   <>
   <div className={Styles.calBody}>
    <div className={Styles.disContainer}>
     
     <div>
      456
     </div>
    </div>
    <div className={Styles.buttons}> 
     <div>
      c
     </div>
     <div>
      +/-
     </div>
     <div>
      %
     </div>
     <div className={Styles.orangeBtn}>
      /
     </div>
     <div>
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
     <div>
      0
     </div>
     <div>
      ....
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
