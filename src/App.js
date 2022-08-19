import './App.css';
import { useState } from 'react';

function App() {
  const [temperature, setTemperature] = useState(10);
  const [displayColor, setDisplayColor] = useState('cold');

  const increaseTemperature = () => {
    if (temperature === 30) return;
    const newTemperature = temperature + 1;

    if (newTemperature >= 15) {
      setDisplayColor('hot');
    }

    setTemperature(newTemperature);
  }

  const decreaseTemperature = () => {
    if (temperature === 0) return;
    const newTemperature = temperature - 1;

    if (newTemperature < 15) {
      setDisplayColor('cold');
    }

    setTemperature(newTemperature);
  }

  return (
    <div className="app">
      <div class='temp-control-box'>
          <div class={`temperature-display ${displayColor}`}><h1>{temperature}°C</h1></div>
          <div class="buttons-container">
            <button class="temp-button" onClick={() => increaseTemperature()}>+</button>
            <button class="temp-button" onClick={() => decreaseTemperature()}>-</button>
          </div>
      </div>
    </div>
  );
}

export default App;
