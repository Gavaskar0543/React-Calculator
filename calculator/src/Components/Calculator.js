import React from "react";
import '../App.css';
class Calculator extends React.Component{


    render(){
        return(
          <>
           <div className="container w-50 border border-1">
            <div className=" w-100 h-25 border border-3">
              display
            </div>
            <div className="container" id='button_outer'>
              
            <div className="buttons-outer">
            <div id="button" className="btn" data-value="AC">
                <span>AC</span>
            </div>
            <div id="button" className="btn" data-value="Del">
                <span>DEL</span>
            </div>
            <div id="button" className="btn" data-value="%">
                <span>%</span>
            </div>
            <div id="button" className="btn" data-value="*">
                <span>*</span>
            </div>
        <div id="button" className="btn"  data-value="9">
            <span>9</span>
        </div>
        <div id="button" className="btn" data-value="8">
            <span>8</span>
        </div>
        <div id="button" className="btn" data-value="7">
            <span>7</span>
        </div>
        <div id="button" className="btn" data-value="/">
            <span>/</span>
        </div>
        <div id="button" className="btn" data-value="6">
            <span>6</span>
        </div>
        <div id="button" className="btn" data-value="5">
            <span>5</span>
        </div>
        <div id="button" className="btn" data-value="4">
            <span>4</span>
        </div>
        <div id="button" className="btn" data-value="-">
            <span>-</span>
        </div>
        <div id="button" className="btn" data-value="3">
            <span>3</span>
        </div>
        <div id="button" className="btn" data-value="2">
            <span>2</span>
        </div>
        <div id="button" className="btn" data-value="1">
            <span>1</span>
        </div>
        <div id="button" className="btn" data-value="+">
            <span>+</span>
        </div>
        <div id="button" className="btn zero"  data-value="0">
            <span>0</span>
        </div>
        <div id="button" className="btn" data-value=".">
            <span>.</span>
        </div>
        <div id="button" className="btn" data-value="=">
            <span>=</span>
        </div>
        </div>
            </div>
           </div>
          </>
          
        )
    }
}
export default Calculator;

