
import React from 'react'

function Functioncompo() {
    const aStyle ={
        display:'inline-block',
        color:'blue',
        margin:'7px',
        TextDecoration:'none'
    }
    return(
        <div style={{backgroundColor: '#cccc'}}>
            <a href='/' style={aStyle}> Home</a> &nbsp;
            <a href='/' style={aStyle}> React</a> &nbsp;
            <a href='/' style={aStyle}> React-Native</a> &nbsp;
        </div>
    )
}

export default Functioncompo

    
    export  function Content() {
      return (
        <div style={{textAlign:'center'}}>
            <h2>Hello <br/> React & React-Native </h2>
            <br/><br/><br/>
        </div>
      )
    }

    export const Fotter()=>{
        return(
            <div style={{textAlign:'center'}}>
                &copy;{new Date().getFullYear()} All right reserved
            </div>
        )
    }
    