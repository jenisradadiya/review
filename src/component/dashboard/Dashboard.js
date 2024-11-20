import React from 'react';

const Dashboard = () => {
  return (
    <>
     <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
      <p className="mt-4 text-gray-600">This is where your content will appear.</p>
      {/* Example cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-bold">Card 1</h2>
          <p className="text-gray-500">Details about card 1...</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-bold">Card 2</h2>
          <p className="text-gray-500">Details about card 2...</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-bold">Card 3</h2>
          <p className="text-gray-500">Details about card 3...</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
