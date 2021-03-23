import * as React from 'react'
import ConfirmPassword from './Components/ConfirmPassword';
import ForgotPassword from './Components/ForgotPassword';
import AppDashboard from './Dashboard'

function App() {
  return (
    <>
      <AppDashboard />
      <ForgotPassword />
      <ConfirmPassword />
    </>
  );
}

export default App;
