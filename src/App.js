import NavBar from "./Components/NavBar";
import { Switch, Route } from "react-router-dom";
import About from "./Components/About";
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <div className="main">
      <Switch>
        <Route exact path="/">
          <h1>Home Page</h1>
        </Route>
        <Route path="/about" component={About} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
