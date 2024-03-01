import React from 'react'
import ExpenseList from './ExpenseList'
import './expense.css'

const Expense = ({ expenseLists, setExpenseLists, setActiveExpense, flag, setFlag }) => {
    return (
        
            <div className='exp-main'>
                <h1>My transaction</h1>
                {expenseLists.length == 0?(
                    <p>No Transaction</p>
                ):(<div className='expense'>
                <ExpenseList
                    expenseLists={expenseLists}
                    setExpenseLists={setExpenseLists}
                    setActiveExpense={setActiveExpense}
                    setFlag={setFlag}
                    flag={flag} />
            </div>)
                }
            </div>

        

    )
}

export default Expense