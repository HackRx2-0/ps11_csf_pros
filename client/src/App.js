import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import BookAppointment from "./Pages/BookAppointment/BookAppointment";
import Community from "./Pages/Community/Community";
import FrontPage from "./Pages/FrontPage/FrontPage";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/'} >
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/front">
            <FrontPage />
          </Route>

          <Route exact path="/community">
            <Community />
          </Route>

          <Route exact path="/bookappointment">
            <BookAppointment />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
