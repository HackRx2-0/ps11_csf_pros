import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import BookAppointment from "./Pages/BookAppointment/BookAppointment";
import Community from "./Pages/Community/Community";
import FrontPage from "./Pages/FrontPage/FrontPage";
import Home from "./Pages/Home/Home";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import UpcomingAppointments from "./Components/Appointments/UpcomingAppointments";
import PastAppointments from "./Components/Appointments/PastAppointments";
import PendingAppointments from "./Components/Appointments/PendingAppointments";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/'} >
        <ToastContainer />
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

          <Route exact path="/upcomingAppointments">
            <UpcomingAppointments />
          </Route>

          <Route exact path="/pastAppointments">
            <PastAppointments />
          </Route>

          <Route exact path="/pendingAppointments">
            <PendingAppointments />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
