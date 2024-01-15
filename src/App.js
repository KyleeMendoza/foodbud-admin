//MUI imports
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

//PAGES
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  const [cookies, setCookie] = useCookies(["admin"]);
  return (
    <BrowserRouter>
      <CookiesProvider>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route path="/" element={<LoginPage setCookie={setCookie} />} />
          <Route
            path="/admin/*"
            element={<ProtectedRoute cookies={cookies} setCookie={setCookie} />}
          />
          {/* <Route path="/admin" element={<AdminPage />}>
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
          </Route> */}
        </Routes>
      </CookiesProvider>
    </BrowserRouter>
  );
}

export default App;
