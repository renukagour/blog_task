// pages/profile.js

import React from 'react';

const AccountPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <button className="text-gray-500">
            <span className="text-lg">←</span>
          </button>
          <div className="text-gray-500">🔔</div>
        </div>
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-semibold text-white">
            MF
          </div>
          <p className="text-gray-700 text-sm mt-2">ID: 0384749</p>
          <h2 className="text-xl font-semibold mt-1">Madushanka Fernando</h2>
          <div className="flex space-x-2 mt-2">
            <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">Verified</span>
            <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full">Level 2</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-gray-500 text-sm mb-2">Profile</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm">
              <span className="text-gray-700">Account details</span>
              <span className="text-gray-400">→</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm">
              <span className="text-gray-700">Your membership</span>
              <span className="text-gray-400">→</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm">
              <span className="text-gray-700">Personal details</span>
              <span className="text-gray-400">→</span>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-gray-500 text-sm mb-2">Useful actions</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm">
              <span className="text-gray-700">Invite your friends</span>
              <span className="text-gray-400">→</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm">
              <span className="text-gray-700">Customer service</span>
              <span className="text-gray-400">→</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm">
              <span className="text-gray-700">Trading mode</span>
              <span className="text-gray-400">→</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-gray-500 text-sm mb-2">Settings</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm">
              <span className="text-gray-700">Account settings</span>
              <span className="text-gray-400">→</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm">
              <span className="text-gray-700">Notifications</span>
              <span className="text-gray-400">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;