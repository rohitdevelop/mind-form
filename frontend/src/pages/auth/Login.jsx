import React from "react";

export default function Login() {
  return (
    <div className="auth-page">
      <h2>Login</h2>
      <form>
        <input name="email" placeholder="Email" />
        <input name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
