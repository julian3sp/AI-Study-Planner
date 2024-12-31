import './App.css';
import Header from './Header';
import Form from './Form'

function App(){
  return(
    <div>
      <Header/>
      <p>This is your AI powered study planner!</p>
      <p>Add topics youd like to study for along with deadlines, and we'll provide you with a full-proof study plan!</p>
      <Form/>
    </div>
  );

}


export default App;
