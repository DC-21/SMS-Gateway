const Login = () => {
  return (
    <section className=" min-h-screen w-full flex items-center justify-center px-4">
      <main className=" border shadow-md bg-white p-2 md:p-4 flex flex-col gap-4 rounded-xl max-w-md w-full">
        <h1 className=" font-bold text-2xl">Login</h1>
        <input
          type="email"
          className=" p-2 border rounded-md bg-gray-200 focus:outline-none"
          placeholder="Email"
        />
        <input
          type="password"
          className=" p-2 border rounded-md bg-gray-200 focus:outline-none"
          placeholder="Password"
        />
        <button className=" p-2 rounded-md font-bold text-center bg-blue-600 text-white">
          Login
        </button>
      </main>
    </section>
  );
};

export default Login;
