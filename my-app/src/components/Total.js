import React from 'react'
import './total.css'
import Piechart from './Piechart'
const Total = ({ totalDebited, totalCredited, expensetypeTotal, expenseContri }) => {

  return (
    <div className='total-main'>
      <h1 id='total-head'>Transaction Details</h1>
      <table>
        <tr>
          <th>Total Debit</th>
          <td>{totalDebited}</td>
        </tr>
        <tr>
          <th>Total Credit</th>
          <td>{totalCredited}</td>
        </tr>
        <tr>
          <th>Net Total</th>
          <td>{totalCredited - totalDebited}</td>
        </tr>
      </table>
      <div>
        <Piechart 
        expensetypeTotal={expensetypeTotal} 
        expenseContri={expenseContri} 
        totalCredited={totalCredited}
        totalDebited={totalDebited}
        />
      </div>
    </div>
  )
}

export default Total
