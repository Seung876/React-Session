import React, {useState} from "react";
import './App.css';
import Timer from "./Timer";
import StateComponent from './State';
import EffectComponent from './Effect';

function App() {

const [showTimer, setShowTimer] = useState(false);

  return (
    <div className="App">
      <div className="black-bg"> 
        <h3>멋쟁이사자처럼</h3>
      </div>
      <div>
      <StateComponent />
      <EffectComponent />
    </div>
    </div>
  );
}

export default App;
