import Hero from "./components/landing/Hero.js"
import Sign from "./components/login/Sign.js"
import Form from "./components/signup/Form.js"
import Settings from "./components/settings/Settings.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  
  return (
      <Router>
        <Switch>
          <Route path='/' exact component={Hero} />
          <Route path='/login' exact component={Sign} />
          <Route path='/signup' exact component={Form} />
          <Route path='/settings' exact component={Settings} />
        </Switch>
      </Router>
      
  );
}

export default App;
