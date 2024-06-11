import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/layout");
    }
  }, [isAuthenticated, navigate]);

  console.log("logged User", user);

  return (
    <div className="loginPage">
      <div className="login-left-container"></div>

      <div className="loginContent">
       
        <div className="login-new">
          <div className="login-heading">
            <h2 className="loginContent-heading">
              Log in to <br /> NEMESIS
            </h2>
          </div>

          <form className="login-form">

            <div className="login-btn">
              {isAuthenticated ? (
                <button
                  className="Btn Btn--primary Btn--large"
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  LogOut
                </button>
              ) : (
                <button
                  className="Btn Btn--primary Btn--large"
                  onClick={() => loginWithRedirect()}
                >
                  Log In Using Gmail
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
