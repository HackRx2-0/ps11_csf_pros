import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Community from "./Pages/Community/Community";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/'} >
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/community">
            <Community />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
