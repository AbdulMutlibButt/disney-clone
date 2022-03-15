import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from "./components/Login";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route  path="/">
            <Header/>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
