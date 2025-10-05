import React from "react";

export const Loginpage = () => {
  return (
    <div style={{ textAlign: "center", margin: "50px" }}>
      <h2>Login Page</h2>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div style={{ margin: "10px" }}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
