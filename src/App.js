//MUI imports
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

//PAGES
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
//NAVLINKS
import Dashboard from "./pages/NavLinks/Dashboard";
import Client from "./pages/NavLinks/Client";
import Employees from "./pages/NavLinks/Employees";
import MyEvents from "./pages/NavLinks/MyEvents";
import Appointment from "./pages/NavLinks/Appointment";
import Transaction from "./pages/NavLinks/Transaction";
import Package from "./pages/NavLinks/Package";
import Dish from "./pages/NavLinks/Dish";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="client" element={<Client />} />
          <Route path="employees" element={<Employees />} />
          <Route path="myevents" element={<MyEvents />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="dish" element={<Dish />} />
          <Route path="package" element={<Package />} />
          <Route path="transaction" element={<Transaction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
