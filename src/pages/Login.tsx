import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  const navigation = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<Inputs>({
    email: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userLogin = async (data: any) => {
    console.log(data.email);
    console.log(data.password);
    navigation("/");
  };
  return (
    <section className=" min-h-screen w-full flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(userLogin)}
        className=" border shadow-md bg-white p-2 md:p-4 flex flex-col gap-4 rounded-xl max-w-md w-full"
      >
        <h1 className=" font-bold text-2xl">Login</h1>
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
          <input
            type="password"
            className=" p-2 border rounded-md bg-gray-200 focus:outline-none"
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
          {errors.password && (
            <span className="text-red-500">
              {errors.password.message as string}
            </span>
          )}
        </div>
        <button className=" p-2 rounded-md active:scale-[98%] duration-200 font-bold text-center bg-blue-600 text-white">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
