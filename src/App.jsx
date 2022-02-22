import logo from './logo.svg';
import './App.css';
import {add,mul,div,sum} from "./calculator/add.jsx"
import FloValue from './calculator/Flo_Value';

function App() {
  return (
    <div className="app">
      {/* <ul>
        <li>Add{add(40,5)}</li>
        <li>MUl{mul(40,5)}</li>
        <li>Div{div(40,3)}</li>
        <li>SUm{sum(40,5)}</li>
      </ul> */}

      <FloValue />


      
    </div>
  );
}

export default App;
