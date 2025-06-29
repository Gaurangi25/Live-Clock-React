import React, { useState } from "react";

function App() {
  setInterval(increase, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function increase() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={increase}>Get Time</button>
    </div>
  );
}

export default App;
