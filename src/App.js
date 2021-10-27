
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Header from './Components/Home/Header/Header';
import Services from './Components/Home/Services/Services';
import Volunteer from './Components/Volunteer/Volunteer';
import Register from './Components/Home/Register/Register';
import Login from './Components/Home/Login/Login';
import AuthProvider from './Contexts/AuthProvider';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/volunteer/:id'>
            <Volunteer></Volunteer>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
