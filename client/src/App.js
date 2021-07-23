import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Community from "./Pages/Community/Community";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/'} >
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/community"} component={Community} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
