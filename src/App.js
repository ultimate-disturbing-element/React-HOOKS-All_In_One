import './App.css';
import TodoApp from './pages/ToDoApp/TodoApp';
import Form from './pages/Form/Form'
import Filter from './pages/Filter/Filter';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Home from './Home';
function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path='/'/>
        <Route component={TodoApp} exact path="/todoApp" />
        <Route component={Form} path="/form"/>
        <Route component={Filter} path="/filter"/>
      </Switch>
    </Router>
  );
}

export default App;
