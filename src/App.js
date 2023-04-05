// inside src/App.js
// Replace previous code with this.

import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import Login from "./Component/Login";

function App() {
  const {register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);
  
  return (
    <>
  
      <div className="row">
        <div className="col-lg-6">
        <div className="resigister">
   <p className="title">Registration Form</p>

<form className="App" onSubmit={handleSubmit(onSubmit)}>
  <input type="text" {...register("name")} placeholder="Usename" required/>
  <input type="email" {...register("email", { required: true })} placeholder="Email"  required/>
  {errors.email && <span style={{ color: "red" }}>
  *Email* is mandatory </span>}
  <input type="password" {...register("password")} placeholder="Password" required />
  <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
</form>
   </div>
        </div>

        <div className="col-lg-6">
        <div className="login">
  
  <Login/>
  </div>
        </div>
      </div>

    </>
  );
}
export default App;