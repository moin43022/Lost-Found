import { useState } from "react";
import "./sign.css";
import Swal from "sweetalert2";

export default function SignInPopup({
  showPopup,
  setShowPopup,
  setLoggedIn,
  isMobile,
}) {
  const [isRegister, setIsRegister] = useState(false);

  const showAlert = (title, text, emoji) => {
    Swal.fire({
      title: `${emoji} ${title}`,
      text,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#4CAF50",
    }).then(() => setShowPopup(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      showAlert("Registered Successfully!", "Your account created 🎉", "🎊");
    } else {
      showAlert("Login Successful!", "Welcome back! 🚀", "🚀");
    }

    setLoggedIn(true);
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="signin-overlay" onClick={() => setShowPopup(false)}>
      <div
        className="signin-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="signin-left">
         <img src="sign.jpg" alt="sign-in-image" className="signin-left-img"/>
        </div>

        <div className="signin-right">
          <button
            className="signin-close-btn"
            onClick={() => setShowPopup(false)}
          >
            <i className="fa-solid fa-circle-xmark"></i>
          </button>

          <div className="signin-box">
            <h2 className="signin-title">
              {isRegister ? "SIGN UP" : "SIGN IN"}
            </h2>

            <p className="signin-subtext">
              {isRegister
                ? "Create your account below."
                : "Enter your username and password"}
            </p>

            <form onSubmit={handleSubmit} className="signin-form">
              <input
                type="text"
                placeholder="Username"
                className="signin-input"
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="signin-input"
                required
              />

              {isRegister && (
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="signin-input"
                  required
                />
              )}

              <div className="signin-btn-group">
                <button type="submit" className="signin-btn-primary">
                  {isRegister ? "SIGN UP" : "SIGN IN"}
                </button>

                <button
                  type="button"
                  className="signin-btn-secondary"
                  onClick={() => setIsRegister(!isRegister)}
                >
                  {isRegister ? "SIGN IN" : "SIGN UP"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
