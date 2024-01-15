import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import AdminPage from "./AdminPage";
import Dashboard from "./NavLinks/Dashboard";
import Client from "./NavLinks/Client";
import Employees from "./NavLinks/Employees";
import MyEvents from "./NavLinks/MyEvents";
import Appointment from "./NavLinks/Appointment";
import Transaction from "./NavLinks/Transaction";
import Package from "./NavLinks/Package";
import Dish from "./NavLinks/Dish";
import Website from "./NavLinks/Website";

function ProtectedRoute({ cookies, setCookie }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          cookies.admin ? (
            <AdminPage setCookie={setCookie} />
          ) : (
            <Navigate to="/" />
          )
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="client" element={<Client />} />
        <Route path="employees" element={<Employees />} />
        <Route path="myevents" element={<MyEvents />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="dish" element={<Dish />} />
        <Route path="package" element={<Package />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="website" element={<Website />} />
      </Route>
    </Routes>
  );
}

export default ProtectedRoute;
