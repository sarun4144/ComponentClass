import React from 'react'
export function Header() {
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
    export  function Content() {
      return (
        <div style={{textAlign:'center'}}>
            <h2>Hello<br/>React & React-Native </h2>
            <br/><br/><br/>
        </div>
      )
    }

    export const Footer=()=>{
        return(
            <div style={{textAlign:'center'}}>
                &copy;{new Date().getFullYear()} All right reserved
            </div>
        )
    }
   /* export class Calender extends React.Component {
        getDate(){
            const dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday']
            const monthName = [ "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December" ]
            const date = new Date()
            const weekDay = dayName[date.getDay()]
            const month = monthName[date.getMonth]
            const day = date.getDate()
            const year = date.getFullYear() + 543
            return('วัน ${weekDay} ที่ ${day} ${month} ${year}')

        }
        render(){
            return(
               <div>{this.getDate()}</div>
            )
        }
     }
    */
    