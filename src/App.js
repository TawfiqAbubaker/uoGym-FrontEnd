import {Switch, Route} from 'react-router-dom';
import { NavBar } from './layout/NavBar';
import { Home } from './pages/Home';
import classes from './App.module.css'
function App() {
  return (
    <div className={classes.App}>
      <NavBar/>
      <Switch>
        <Route path='/'>
         <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
