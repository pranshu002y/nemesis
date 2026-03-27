import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const {
    loginWithRedirect,
    isAuthenticated,
    isLoading,
    logout,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
            type="button"  className="Btn Btn--primary Btn--large"
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo: window.location.origin,
                },
              })
            }
          >
            Log Out
          </button>
        ) : (
          <button
            type="button"  className="Btn Btn--primary Btn--large"
            onClick={() =>
              loginWithRedirect({
                appState: { returnTo: "/layout" },
              })
            }
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