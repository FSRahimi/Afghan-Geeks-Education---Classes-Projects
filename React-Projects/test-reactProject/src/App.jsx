import "./App.css";
import {Welcome} from "./Welcome";
import SetButton from "./Button";
import { Hello } from "./Hello"

function App() {
  return (
    <div>
      <h1> This is the React Session</h1>
      <Welcome />
      <SetButton />
      <Hello/>
    </div>
  );
} 

export default App;
