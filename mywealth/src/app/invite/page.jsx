import React, { useState } from 'react';

const Invite = () => {
  const [email, setEmail] = useState('');

  const handleInvite = () => {
    alert(`Invite sent to ${email}`);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Invite a Friend</h2>
      <input
        type="email"
        placeholder="Enter email"
        className="w-full px-3 py-2 mb-4 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="w-full bg-blue-600 text-white py-2 rounded"
        onClick={handleInvite}
      >
        Send Invite
      </button>
    </div>
  );
};

export default Invite;
