import React from "react";

export default function Register() {
  return (
    <div className="auth-page">
      <h2>Register</h2>
      <form>
        <input name="name" placeholder="Name" />
        <input name="email" placeholder="Email" />
        <input name="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
