import './App.css';
import Form from './Form';
import "./index.css";
function App(){
  return(
    <div class = "App">
      <h1 class = "App-header">Welcome to the AI Study Planner</h1>
      <p>This is your AI powered study planner!</p>
      <p>Add topics youd like to study for along with deadlines, and we'll provide you with a full-proof study plan!</p>
      <Form/>
    </div>
  );

}


export default App;
