import React, { useState, useEffect } from "react";

function App() {
  const currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);
  console.log(currentTime);

  function increase() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  
  }

  useEffect(() => {
    const interval = setInterval(increase, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={increase}>Time</button>
    </div>
  );
}

export default App;
