import React from "react";
import "./expenseList.css";
const ExpenseList = ({ expenseLists, setExpenseLists, setActiveExpense, flag, setFlag }) => {
  //function to delete list/item
  const deleteExpenseList = (id) => {
    const filterExpenseList = expenseLists.filter((item) => {
      return item.id != id;
    });
    setExpenseLists(filterExpenseList);
    setFlag(!flag)
  };

  //function to edit expense list
  const editExpenseList = (id) => {
    const editList = expenseLists.find((item) => {
      return item.id === id;
    });
    setActiveExpense(editList);
  };

  return (
    <div className="main-div-exp">
      {expenseLists.map((item) => {
        return (
          <div key={item.id} className="expenseList-main">
            <div className="exp-list">
              <div className="expenseNameIcon">
                {item.expenseType == "Grocery" ? (
                  <p>G</p>
                ) : item.expenseType == "Shopping" ? (
                  <p>S</p>
                ) : item.expenseType == "Income" ? (
                  <p>I</p>
                ) : (
                  <p>M</p>
                )}
              </div>
              <div className="expensename_and_amount">
                <p className="exp-name">{item.name}</p>
                {item.amountType == "Debited" ? (
                  <p className="dbt-amt">-{item.amount}</p>
                ) : (
                  <p className="crdt-amt">+{item.amount}</p>
                )}
              </div>
              <div className="btn-div">
                <button id="dlt-btn" onClick={() => deleteExpenseList(item.id)}>-</button>
                <button id="edit-btn" onClick={() => editExpenseList(item.id)}>Edit</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseList;