const Login = () => {
  return (
    <section className=" min-h-screen w-full flex items-center justify-center px-4">
      <main className=" border border-gray-400 shadow-md p-4 flex flex-col gap-2 rounded-xl max-w-md w-full">
        <h1 className=" font-bold text-2xl">Login</h1>
        <input type="email" className=" p-2 border rounded-md mb-2" />
        <input type="password" className=" p-2 border rounded-md mb-2" />
      </main>
    </section>
  );
};

export default Login;
