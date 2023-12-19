import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/bg.png";

const Login = () => {
  const navigation = useNavigate();
  const [showPass, setShowPass] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userLogin = async (data: any) => {
    console.log(data.email);
    console.log(data.password);
    navigation("/dashboard");
  };
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className=" min-h-screen bg-cover bg-center bg-no-repeat w-full flex items-center justify-center px-4"
    >
      <form
        onSubmit={handleSubmit(userLogin)}
        className=" border shadow-md bg-white p-2 md:p-4 flex flex-col gap-4 rounded-xl max-w-md w-full"
      >
        <h1 className=" font-bold text-2xl text-blue-900 text-center">Login</h1>
        <div className="flex flex-col gap-1">
          <input
            type="email"
            className=" p-2 border rounded-md bg-gray-200 focus:outline-none"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <span className="text-red-500">
              {errors.email.message as string}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <div className=" border rounded-md items-center flex w-full">
            <input
              type={showPass ? "text" : "password"}
              className="p-2 focus:outline-none flex-1 bg-gray-200"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password shouldn't be less than 6 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password shouldn't be more than 20 characters",
                },
              })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className=" px-2 hover:text-blue-500 duration-300"
            >
              {showPass ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
            </button>
          </div>

          {errors.password && (
            <span className="text-red-500">
              {errors.password.message as string}
            </span>
          )}
        </div>
        <button className=" p-2 rounded-md active:scale-[98%] duration-200 font-bold text-center bg-blue-600 hover:bg-blue-900 text-white">
          Login
        </button>

        <Link
          to={"/register"}
          className=" text-center gap-2 flex justify-center"
        >
          <span>Don't have an account?</span>
          <span className=" text-blue-800 hover:underline hover:text-blue-500 duration-300">
            Register
          </span>
        </Link>
      </form>
    </section>
  );
};

export default Login;
