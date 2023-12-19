const Dashboard = () => {
  return (
    <div className="w-full flex justify-center items-center p-4">
      <div className="w-full grid md:grid-cols-2 grid-cols-1 items-center gap-4">
        <div className="w-full flex justify-center border border-slate-900 py-6 px-2 rounded">
          Remaining SMS: 200
        </div>
        <div className="w-full flex justify-center border border-slate-900 py-6 px-2 rounded">
          Used SMS: 1800
        </div>
        <div className="w-full flex justify-center border border-slate-900 py-6 px-2 rounded">
          Pending SMS: 12
        </div>
        <div className="w-full flex justify-center border border-slate-900 py-6 px-2 rounded">
          Sent SMS: 1812
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
