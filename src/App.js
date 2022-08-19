import './App.css';
import { useState } from 'react';

function App() {
  const [temperature, setTemperature] = useState(10);
  const [displayColor, setDisplayColor] = useState('black')

  return (
    <div className="app">
      <div class='temp-control-box'>
          <div class="temperature-display"><h1>{temperature}°C</h1></div>
          <div class="buttons-container">
            <button class="temp-button" onClick={() => setTemperature(temperature + 1)}>+</button>
            <button class="temp-button" onClick={() => setTemperature(temperature - 1)}>-</button>
          </div>
      </div>
    </div>
  );
}

export default App;
