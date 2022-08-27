import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [counterValue, setCounterValue] = useState(1);
  const [changeValue, setChangeValue] = useState(1);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setCounterValue(data.counter);
        setChangeValue(data.changeValue);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="App">
        <input
          value={changeValue}
          type="number"
          onChange={(e) => setChangeValue(parseInt(e.target.value))}
        />
        <div className="counter">
          <button
            onClick={() => {
              setCounterValue((prevValue) => prevValue + changeValue); // passed in function to prevent memory leak
            }}
          >
            <b>+</b>
          </button>
          <p>{counterValue}</p>
          <button
            onClick={() => {
              setCounterValue((prevValue) => prevValue - changeValue);
            }}
          >
            <b>-</b>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
