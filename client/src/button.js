import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const ref = useRef(null);

  const myfunc = () => {
    console.log("I was activated 5 seconds later");
  };

  useEffect(() => {
    setTimeout(() => {
      ref.current.click();
    }, 5000); //miliseconds
  }, []);
  return (
    <button ref={ref} onClick={myfunc}>
      TEST
    </button>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
