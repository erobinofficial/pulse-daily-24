import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

export default function Register() {
  const { createUser } = useContext(AuthContext);
  
  const registerHandle = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');

    // create user
    createUser(email, password)
    .then(userCredential =>{
      console.log(userCredential.user);
      
    })
    .catch(error=>{
      console.log(error);
      
    })
    
    
  };
  return (
    <div className="bg-base-200 h-screen">
      <Navbar></Navbar>
      <div className="hero">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={registerHandle} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Image URL"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="checkbox checkbox-primary"
                  required
                />
                <label htmlFor="terms" className="text-gray-700">
                  I agree to the{" "}
                  <a href="/register" className="text-blue-500 underline">
                    Terms and Conditions
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>
                Have an account?{" "}
                <Link to="/login" className="text-blue-600 font-bold">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
