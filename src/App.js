import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Event from "./pages/Events";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebaseConfig";
import { login, logout } from "./redux/slices/UserSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  console.log(user)


  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute/>}>
            <Route element={<Home />}  path="/" exact />
            <Route element={<About />} path="/about"/>
            <Route path="/event" element={<Event />} />
          </Route>
          <Route element={<Login />} path="/login"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
