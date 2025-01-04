import React, { useContext } from "react";
import { Link } from "react-router-dom";
import signup from "../../assets/images/login/login.svg";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
    const {createUser, error, setError} = useContext(AuthContext);

    const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value
    console.log(name, email, photo, password, confirm_password);

    if(password.length < 6){
        setError('Password must be at least 6 characters');
        return
    }
    else if(password !== confirm_password){
        setError('Password does not match');
        return
    }

    createUser(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => {
        console.log(error)
    })
    }

  return (
    <div className="grid grid-cols-1 gap-16 my-10 md:grid-cols-2">
      <div>
        <img className="h-full" src={signup} alt="" />
      </div>
      <div className="flex flex-col p-4 border-2 rounded-md md:px-20 md:py-6 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-lg dark:text-gray-600">
            Sign up to create your account
          </p>
        </div>
        <form onSubmit={handleSignUp} className="">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-lg">
                Username
              </label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Your name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-lg">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                required
              />
            </div>
            <div>
              <label htmlFor="photo" className="block mb-2 text-lg">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="Photo"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                required
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-lg">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="******"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                required
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="confirm_password" className="text-lg">
                  Confirm Password
                </label>
              </div>
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                placeholder="******"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                required
              />
            </div>
          </div>
          <button
            className="w-full mt-10 py-2 font-semibold text-white text-xl bg-[#FF3811] border-[#FF3811] rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            Sign Up
            </button>
        </form>
        {error && <p className="text-center text-[#FF3811] mt-4">{error}</p>}
        <p className="px-6 my-6 text-center dark:text-gray-600">
          Already have an account?{" "}
          <Link
            to={"/login"}
            rel="noopener noreferrer"
            href="#"
            className="text-[#FF3811] hover:underline dark:text-violet-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
