import React from 'react'

const random = Math.round(Math.random());

const InfoCard = () => {
    return (
        <div style={{textAlign:'center',padding:'0 10%'}}>
        Try saying: 
        <br/>
        Add {random ?'Income ':'Expense '} 
        of {random ?'$100 ':'$50 '} 
        in category  {random ?'Savings ':'Travel '}  
        for next {random ?'Monday ':'Tuesday '} 
        </div>
    )
}

export default InfoCard
