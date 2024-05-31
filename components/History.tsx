import React from 'react';



const History = ({title, amount, loss}: {title: string, amount: string, loss: boolean }) => {
  return (
    <div className= 'flex flex-row gap-10'>
        <h2 >{title}</h2> 
        <p style={{color: loss ? '#C6011F':'green'}}>{amount}</p>
    </div>
  )
}

export default History