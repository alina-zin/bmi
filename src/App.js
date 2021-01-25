import './App.css';
import {useState} from 'react';

function App() {

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(0);

  function countBMI(e) {
    e.preventDefault();
    const bmi = weight / (height * height);
    setBMI(bmi);

  }


  return (
    <div className="container">
      <h2>BMI</h2>
      <h3>Calculating body mass index</h3>
      <form onSubmit={countBMI}>
        <div>
          <label>Height</label>
          <input type="number" value={height} onChange={e => setHeight(e.target.value)}></input>
        </div>
        <div>
          <label>Weight</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <output>{bmi.toFixed(1)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
