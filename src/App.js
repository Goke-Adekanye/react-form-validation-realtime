import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [describe, setDescribe] = useState("I would describe my user type as");
  const [password, setPassword] = useState("");

  const isEmail = (email) => {
    const regEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) return true;
    else return false;
  };

  const disabled =
    name === "" ||
    email === "" ||
    describe === "I would describe my user type as" ||
    password === "";

  return (
    <section className="main">
      <div className="row">
        <div className="form-area">
          <div className="text">
            <h3>Let's set up your account</h3>
            <p>
              Already have an account? <a href="##">Sign in</a>
            </p>
          </div>

          <form action="" className="form">
            <div className="input-group">
              <input
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <span className="label">Your name</span>
            </div>
            <div className="input-group">
              <input
                type="email"
                required
                className={!isEmail(email) && email ? "error" : ""}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span
                className={`label ${!isEmail(email) && email ? "error" : ""}`}
              >
                Email address
              </span>
              {!isEmail(email) && email && (
                <small className="error">
                  Please enter a valid email address
                </small>
              )}
            </div>
            <div className="select-group">
              <select
                value={describe}
                onChange={(e) => setDescribe(e.target.value)}
              >
                <option value="I would describe my user type as">
                  I would describe my user type as
                </option>
                <option value="Developer">Developer</option>
              </select>
            </div>
            <div className="input-groupp">
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="label">Password</span>
              <i class="fa fa-eye"></i>
              <small>Minimum 8 characters</small>
            </div>

            <div>
              <button
                type="submit"
                disabled={disabled}
                class={!disabled && "valid"}
              >
                Next
              </button>
            </div>
          </form>

          <div className="bottom-text">
            <p>
              By clicking the "Next" button, you agree to creating afree acount,
              and to <span>Terms of Service</span> and{" "}
              <span>Privacy Policy</span>
            </p>
          </div>
        </div>

        <div className="text-area">
          <div className="dummy-texts">
            <h3>Dummy Heading</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              eius magni autem veritatis iure quam vel sed, ab deserunt harum!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
