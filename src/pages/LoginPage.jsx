/* eslint-disable react/no-unescaped-entities */
function Login() {
  return (
    <>
      <form action="" className="main">
        <div className="inputs">
          <center>
            <h1 className="" style={{ margin: "30px" }}>Login</h1>
          </center>
          <input type="email" placeholder="Email...." /><br />
          <input type="password" placeholder="Password...." /><br />
          <center className="">
            <p style={{ marginBottom: "10px", fontSize: "16px" }}>
               Don't have an account? <a href="/signup">Sign up</a>
            </p>
            <button>Login</button>
          </center>
        </div>
      </form>
    </>
  );
}

export default Login;
