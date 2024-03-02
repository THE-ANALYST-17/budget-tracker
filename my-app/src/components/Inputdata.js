import React, { useEffect, useState } from "react";
import "./input.css";
import ExpenseList from "./ExpenseList";

const Inputdata = ({ expenseListUpdater, activeExpense }) => {
  const [expenseName, setExpenseName] = useState(activeExpense);

  //Function to handle Expense Data
  const handleExpenseName = (ev) => {
    setExpenseName((prevVal) => ({
      ...prevVal,
      name: ev.target.value,
    }));
  };

  //Function to handle amount
  const handleAmt = (ev) => {
    setExpenseName((prevVal) => ({
      ...prevVal,
      amount: +ev.target.value,
    }));
  };

  //function to handle amount type -whether the amount is credited or debited
  const handleAmountType = (ev) => {
    console.log('amount type',ev.target.value)
    setExpenseName((prevVal) => ({
      ...prevVal,
      amountType: ev.target.value,
    }));
    
  };

  //function to handle expenseType
  const handleExpenseType = (ev) => {
    setExpenseName((prevVal) => ({
      ...prevVal,
      expenseType: ev.target.value
    }))
  }

  //function which handle 'click' to add expense list to UI
  const updateExpenseList = () => {
    expenseListUpdater(expenseName);
    setExpenseName({
      id: null,
      name: "",
      amount: "",
      amountType: "",
      expenseType: "",
    });
  };
  // console.log(expenseName)

  //useeffect
  useEffect(() => {
    setExpenseName(activeExpense);
  }, [activeExpense]);

  return (
    <div className="main">
      <div className="first-row">
        <h1 id="heading">Expense Tracker</h1>
        <div className="description">
          <label htmlFor="exp-inp"></label>
          <input
            type="text"
            name=""
            id="exp-inp"
            placeholder="Description"
            value={expenseName.name}
            onChange={handleExpenseName}
          />
        </div>
      </div>
      <div className="second-row">
        <div className="amount">
          <label htmlFor="amount"></label>
          <input
            type="number"
            name=""
            placeholder="Amount"
            value={expenseName.amount}
            onChange={handleAmt}
          />
        </div>
        <div className="amount-type">
          <p>D / C</p>
          <div className="d-c">
            <label for="amount-type"></label>
            <select
              name="amount-type"
              id="amt-type"
              value={expenseName.amountType}
              onChange={handleAmountType}
            >
              <option value="" disabled selected>Select an option</option>
              <option value={"Debited"}>Debited</option>
              <option value={"Credited"}>Credited</option>
            </select>
          </div>
        </div>
        <div className="expense-type">
          <p>Type</p>
          <div className="exp-type">
            <label for="Expense-type"></label>
            <select
              name="Expense-type"
              id="expn-type"
              value={expenseName.expenseType}
              onChange={handleExpenseType}
            >
              <option value="" disabled selected>Select an option</option>
              <option value={"Grocery"}>Grocery</option>
              <option value={"Shopping"}>Shopping</option>
              <option value={"Misc"}>Misc</option>
              <option value={"Income"}>Income</option>
            </select>
          </div>
        </div>
        <div className="add-btn">
          <button id='add-btn' onClick={updateExpenseList}>ADD</button>
        </div>
      </div>
    </div>
  );
};

export default Inputdata;