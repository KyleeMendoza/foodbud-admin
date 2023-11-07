//MUI imports
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//PAGES
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
//NAVLINKS
import Dashboard from "./pages/NavLinks/Dashboard";
import Accounts from "./pages/NavLinks/Accounts";
import Employees from "./pages/NavLinks/Employees";
import MyEvents from "./pages/NavLinks/MyEvents";
import Appointment from "./pages/NavLinks/Appointment";
import Orders from "./pages/NavLinks/Orders";
import Feedbacks from "./pages/NavLinks/Feedbacks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="employees" element={<Employees />} />
          <Route path="myevents" element={<MyEvents />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="orders" element={<Orders />} />
          <Route path="feedbacks" element={<Feedbacks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
