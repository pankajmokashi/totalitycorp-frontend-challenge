import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function SignupSignin() {
  const [loginForm, setLoginForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const cart = [];

  function signup() {
    setLoading(true);
    if (
      name !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      if (password === confirmPassword) {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          if (user.email === email) {
            toast.error("User already present!");
            setLoading(false);
          } else {
            localStorage.setItem("cart", JSON.stringify(cart));
            const token = "123";
            localStorage.setItem("token", token);
            let obj = {
              name,
              email,
              password,
            };
            localStorage.setItem("user", JSON.stringify(obj));
            toast.success("User Created!");
            setLoading(false);

            navigate("/home");
          }
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        }
      } else {
        toast.error("Password and confirm Password don't match!");
        setLoading(false);
      }
    } else {
      toast.error("All fields are mandatory!");
      setLoading(false);
    }
  }

  function login() {
    let obj = JSON.parse(localStorage.getItem("user"));
    setLoading(true);
    if (email !== "" && password !== "") {
      if (email === obj.email && password === obj.password) {
        const token = "123";
        localStorage.setItem("token", token);
        toast.success("Successfully Logged In!");
        setLoading(false);
        setEmail("");
        setPassword("");
        navigate("/home");
      } else {
        toast.error("Invalid Entries!");
        setLoading(false);
      }
    } else {
      toast.error("All fields are mandatory!");
      setLoading(false);
    }
  }

  return (
    <div className="signup-wrapper">
      {loginForm ? (
        <>
          <h2 className="title">
            Login on{" "}
            <span style={{ color: "var(--theme)" }}>Shopping Site.</span>
          </h2>
          <form>
            <Input
              type={"email"}
              label={"Email"}
              state={email}
              setState={setEmail}
              placeholder={"johndoe@gmail.com"}
            />
            <Input
              type={"password"}
              label={"Password"}
              state={password}
              setState={setPassword}
              placeholder={"Example@123"}
            />
            <Button
              text={loading ? "Loading..." : "Log in"}
              onClick={login}
              disabled={loading}
            ></Button>
            <p className="p-login" onClick={() => setLoginForm(!loginForm)}>
              Or Don't Have An Account? Click Here.
            </p>
          </form>
        </>
      ) : (
        <>
          <h2 className="title">
            Sign up on{" "}
            <span style={{ color: "var(--theme)" }}>Shopping Site.</span>
          </h2>
          <form>
            <Input
              type={"text"}
              label={"Full Name"}
              state={name}
              setState={setName}
              placeholder={"John Doe"}
            />
            <Input
              type={"email"}
              label={"Email"}
              state={email}
              setState={setEmail}
              placeholder={"johndoe@gmail.com"}
            />
            <Input
              type={"password"}
              label={"Password"}
              state={password}
              setState={setPassword}
              placeholder={"Example@123"}
            />
            <Input
              type={"password"}
              label={"Confirm Password"}
              state={confirmPassword}
              setState={setConfirmPassword}
              placeholder={"Example@123"}
            />
            <Button
              text={loading ? "Loading..." : "Sign up"}
              onClick={signup}
              disabled={loading}
            ></Button>
            <p className="p-login" onClick={() => setLoginForm(!loginForm)}>
              Or Have An Account Already? Click Here.
            </p>
          </form>
        </>
      )}
    </div>
  );
}

export default SignupSignin;
