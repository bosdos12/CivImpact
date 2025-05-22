import Link from "next/link";

export default function Home() {
  return (
    <div className="pageContainer loginpage_fullscreen">
      

      <div className="login-area">
        <p className="x-large" style={{
          marginTop: "1rem",
          marginBottom: "1rem"
        }}>
          CivImpact Login
        </p>

        <p className="small">ID Number</p>
        <input className="login-area_input" type="number" />

        <p className="small">Password</p>
        <input className="login-area_input" type="password" />


        <div className="login-area_button-forgot_password-container">
          <div className="login-area_button">
            <p className="medium white">Login</p>
          </div>
  
          <Link href="/forgotpassword" style={{color: "black"}}>
            <p className="small" style={{marginTop: "1.1rem"}}>Forgot Password</p>
          </Link>
        </div>

        <div className="login-area-horizontal_line"></div>
        <p className="small" style={{
          marginBottom: "1rem"
        }}>Don't have an account? <Link href="/" style={{
          color: "#244AA5"
        }}>Signup</Link></p>

      </div>


    </div>
  );
}
