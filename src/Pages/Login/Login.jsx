import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

export default function Login() {
  const handeLogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form.get('email'));
    
    
  }
  return (
    <div className="bg-base-200 h-screen">
      <Navbar></Navbar>
      <div className="hero">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handeLogin} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                Do not have an account?{" "}
                <Link to="/register" className="text-blue-600 font-bold">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
