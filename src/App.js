import Hero from "./components/landing/Hero.js"
import Sign from "./components/login/Sign.js"
import Signup from "./components/signup/Signup.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/' exact component={Hero} />
          <Route path='/login' exact component={Sign} />
          <Route path='/signup' exact component={Signup} />
        </Switch>
      </Router>
  );
}

export default App;
