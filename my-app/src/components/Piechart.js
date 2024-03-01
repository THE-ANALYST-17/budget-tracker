import "./piechart.css";
const Piechart = ({
  expensetypeTotal,
  expenseContri,
  totalCredited,
  totalDebited,
}) => {
  //converting reducedData which is an object into an array of object
  console.log("value of expenseTypeTotal", expensetypeTotal);
  //Sorting the arrayOfObject data
  const sortedArrayOfObjects = expensetypeTotal.sort((a, b) => {
    console.log(
      "sorted array of object",
      Object.values(a)[0],
      Object.values(b)[0]
    );
    const valueA = Object.values(a)[0];
    const valueB = Object.values(b)[0];
    return valueB - valueA;
  });

  return (
    <div className="exp_name_main_div">
      <div className="exp_name_percent_div">
        {expensetypeTotal.map((item) => {
          if (item.Grocery) {
            return (
              <p>
                Grocery % :
                {Math.round(
                  (item.Grocery * 100) / (totalCredited + totalDebited)
                )}
              </p>
            );
          }
          if (item.Misc) {
            return (
              <p>
                Misc % :
                {Math.round((item.Misc * 100) / (totalCredited + totalDebited))}
              </p>
            );
          }
          if (item.Shopping) {
            return (
              <p>
                Shopping % :
                {Math.round(
                  (item.Shopping * 100) / (totalCredited + totalDebited)
                )}
              </p>
            );
          }
          if (item.Income) {
            return (
              <p>
                Income % :
                {Math.round(
                  (item.Income * 100) / (totalCredited + totalDebited)
                )}
              </p>
            );
          }
        })}
      </div>
      <div className="expensename_div">
        {sortedArrayOfObjects.map((item, index) => {
          const keysValue = Object.keys(item)[0];
          if (keysValue == "Grocery") {
            return (
              <p key={index}>
                <span style={{ color: "red" }}></span>
                {keysValue}
              </p>
            );
          }
          if (keysValue == "Shopping") {
            return (
              <p key={index}>
                <span style={{ color: "yellow" }}></span>
                {keysValue}
              </p>
            );
          }
          if (keysValue == "Misc") {
            return (
              <p key={index}>
                <span style={{ color: "green" }}></span>
                {keysValue}
              </p>
            );
          }
          if (keysValue == "Income") {
            return (
              <p key={index}>
                <span style={{ color: "blue" }}></span>
                {keysValue}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Piechart;
