import React from 'react';

const AccountDetails = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Account details</h2>
        <button className="text-blue-500 hover:underline focus:outline-none">
          Edit
        </button>
      </div>
      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">User ID</label>
          <div className="bg-gray-100 px-4 py-2 rounded-lg">0487743</div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            User Transaction/Number (UTN)
          </label>
          <div className="bg-gray-100 px-4 py-2 rounded-lg">
            0048 7743 6478 9874
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AccountDetails