import React from "react";
import Styled from 'styled-components';
class Calculator extends React.Component{


    render(){
        return(
           <OuterDiv>
             <InnerDiv>
                <Display>
                    
                </Display>
                
             </InnerDiv>
           </OuterDiv>
        )
    }
}

const OuterDiv = Styled.div`
width:100vw;
height:100vh;
display:flex;

font-family:verdana;
`

const InnerDiv = Styled.div`
`

const Display = Styled.div`
height:5rem;
width:25rem;
border:2px solid black;

`



export default Calculator;