import * as React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ConfirmPassword from './Components/ConfirmPassword';
import ForgotPassword from './Components/ForgotPassword';
import AppDashboard from './pages/Dashboard'
// import Dashboard from "./pages/Dashboard";
// import Invest from "./pages/Invest";
// import RequestMoney from "./pages/RequestMoney";
// import TransactionLog from "./pages/TransactionLog";
// import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <AppDashboard /> */}
        <Switch>
          <Route path="/" exact component={AppDashboard} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/confirm-password" component={ConfirmPassword} />

          {/* <ForgotPassword />
          <ConfirmPassword /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
