import React from 'react';

const MembershipDetails = () => {
  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800">Membership</h2>
      <p className="text-gray-600 mt-2">Current Level: Gold Member</p>
      <ul className="mt-4 space-y-2">
        <li>✔ Access to premium content</li>
        <li>✔ 10% discount on all purchases</li>
        <li>✔ Priority customer support</li>
      </ul>
    </div>
  );
};

export default MembershipDetails;
