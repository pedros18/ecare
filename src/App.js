import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute"; // Assuming PrivateRoute component
import Services from "./Pages/Services/Services";
import About from "./Pages/Home/About/About";
import ServiceDetail from "./Pages/Home/ServiceDetail/ServiceDetail";
import Appointment from "./Pages/Appointment/Appointment";
import Success from "./Pages/Success/Success";
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import AddPatient from "./Pages/Patient/AddPatient";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/services",
    element: (
      <>
        <Header />
        <Services />
        <Footer />
      </>
    ),
  },
  {
    path: "/appointment",
    element: (
      <>
        <Header />
        <Appointment />
        <Footer />
      </>
    ),
  },
  {
    path: "/addpatient",
    element: (
      <>
        <Header />
        <AddPatient />
        <Footer />
      </>
    ),
  },
  {
    path: "/success",
    element: (
      <>
        <Header />
        <Success />
        <Footer />
      </>
    ),
  },
  {
    path: "/service/:serviceId",
    element: (
      <>
        <Header />
        <PrivateRoute element={<ServiceDetail />} />
        <Footer />
      </>
    ),
  }
]);

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
