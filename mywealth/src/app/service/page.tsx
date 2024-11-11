import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className=" bg-white rounded-lg shadow-md p-6 container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg shadow">Investment Advice</div>
        <div className="bg-green-100 p-4 rounded-lg shadow">Wealth Management</div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow">Retirement Planning</div>
      </div>
    </div>
    </div>
  );
};

export default Services;
