const Login = () => {
  return (
    <section className=" min-h-screen w-full flex items-center justify-center px-4">
      <main className=" border shadow-md p-4 flex flex-col gap-2 rounded-xl">
        <h1>Login</h1>
        <input type="email" className=" p-2 border rounded-md" />
        <input type="password" className=" p-2 border rounded-md" />
      </main>
    </section>
  );
};

export default Login;
