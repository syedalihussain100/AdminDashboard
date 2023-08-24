import React, { useState, useRef, useEffect } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { login } from "../redux/slices/UserSlice";
import { toast } from "react-toastify";


const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ref = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password).then((res) => {
      const data = res?.user;
      dispatch(
        login({
          displayName: data?.displayName,
          email: data?.email,
          uid: data?.uid,
          token: data?.refreshToken,
        })
      );
      toast.success("Login Successfully!");
      navigate("/")
    }).catch((err)=> toast.error(err?.message));
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className="login-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Admin Login</h3>
              <form
                className="d-flex flex-column gap-15"
                onSubmit={handleSubmit}
              >
                <div>
                  <input
                    ref={ref}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mt-1">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                    <button type="submit" className="button border-0 py-2 px-2">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
