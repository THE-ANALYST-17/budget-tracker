import React, { useEffect, useState } from "react";
import Inputdata from './Inputdata'
import Total from "./Total";
import "../App.css";
import Expense from "./Expense";

const ExpenseTracker = () => {
  const [activeExpense, setActiveExpense] = useState({
    id: null,
    name: "",
    amount: "",
    amountType: "",
    expenseType: "",
  });
  const [expenseLists, setExpenseLists] = useState([]);
  const [totalDebited, setTotalDebited] = useState(0);
  const [totalCredited, setTotalCredited] = useState(0);
  const [expensetypeTotal, setExpensetypeTotal] = useState([])
  const [expenseContri,setExpenseContri] = useState()

  const [flag, setFlag] = useState(false);
  const expenseListUpdater = (inputVal) => {
    if (inputVal.name && !inputVal.id) {
      setFlag(!flag);
      const AllexpenseData = {
        id: new Date().getTime().toString(),
        name: inputVal.name,
        amount: inputVal.amount,
        amountType: inputVal.amountType,
        expenseType: inputVal.expenseType,
      };
      setExpenseLists([AllexpenseData, ...expenseLists]);
    }
    if (inputVal.name && inputVal.id) {
      setFlag(!flag);
      setExpenseLists(
        expenseLists.map((item) => {
          //agar jis item pe click kiya hai usi ka hi hame edited value update karna
          //hai - to us item ki "id" aur filhal jo input value hai uski id same hai
          //tab hi update karna hai isiliye if k ander ye conditioon dala hai
          if (item.id === inputVal.id) {
            return { ...item, ...inputVal };
          }
          return item;
        })
      );
    }
  };
  console.log(expenseLists);
  //calculating total debited ,total credited and net amount
  useEffect(() => {

    //calculating total debited ,total credited and net amount
    const totalDebitedAmt = expenseLists.reduce((total, item) => {
      if (item.amountType === "Debited") {
        total = total + item.amount;
      }
      return total;
    }, 0);
    setTotalDebited(totalDebitedAmt);

    const totalCreditedAmt = expenseLists.reduce((total, item) => {
      if (item.amountType === "Credited") {
        total = total + item.amount;
      }
      return total;
    }, 0);
    setTotalCredited(totalCreditedAmt);

    //reducing the expenseType data 
    const reducedData = expenseLists.reduce((acc, item) => {
      if(acc[item.expenseType]){
        acc[item.expenseType] += item.amount
      }else{
        acc[item.expenseType] = item.amount
      }
      return acc 
    }, {})
    const arrayOfObjects = Object.keys(reducedData).map(item=>({
      [item]:reducedData[item]
    }))

    setExpensetypeTotal([...arrayOfObjects])
    console.log("array of objects",arrayOfObjects);
    // console.log('checking array of object wala part',arrayOfObject);
    // setExpensetypeTotal([...sortedArrayOfObjects])
    // console.log('checking',expensetypeTotal)
    
  }, [expenseLists]);

  // console.log('checking',expensetypeTotal)

  // console.log('checking if this is working', expensetypeTotal);
  return (
    <div className="main-div">
      <div className="ttl">
        <Total
          totalDebited={totalDebited}
          totalCredited={totalCredited}
          expensetypeTotal={expensetypeTotal}
          expenseContri={expenseContri}
        />
      </div>
      <div className="inp-exp">
        <Inputdata
          expenseListUpdater={expenseListUpdater}
          activeExpense={activeExpense}

        />
        <Expense
          expenseLists={expenseLists}
          setExpenseLists={setExpenseLists}
          setActiveExpense={setActiveExpense}
          setFlag={setFlag}
          flag={flag}
        />
      </div>
    </div>
  );
};

export default ExpenseTracker;