import './App.css';
import { Route } from 'react-router-dom'
import Employees from './components/Employees/container'
import Main from './components/Main/component'

function App() {
  return (
    <>
      <Route  exact path='/'>
        <Main/>
      </Route>
      <Route  exact path='/employees'>
        <Employees/>
      </Route>
    </>
  );
}

export default App;
