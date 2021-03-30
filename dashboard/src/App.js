import * as React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ConfirmPassword from './Components/ConfirmPassword';
import ForgotPassword from './Components/ForgotPassword';
import AppDashboard from './pages/Dashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={AppDashboard} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/confirmPassword" component={ConfirmPassword} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
