
import "./style.css"

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-2">Register in <span className="logo">MyWealth</span></h1>
        <p className="text-center text-gray-600 mb-2">The fastest-growing investment and wealth management company.</p>
        <p className="text-center text-gray-500 text-sm mb-4">
          <span role="img" aria-label="trust-icon">💰</span> +10,000 users trust us.
        </p>
    
        <label htmlFor="email" className="block font-semibold text-gray-900">Full Name</label>
        <input
          type="name"
          id="name"
          placeholder="Enter your Name"
          className="mt-1 mb-6 w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-900"
        />
              
              <label htmlFor="email" className="block font-semibold text-gray-900">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="mt-1 mb-6 w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-900"
        />
        
              
        
        <label htmlFor="password" className="block font-semibold text-gray-900">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="mt-1 mb-6 w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-900"
        />
        
       
          <button className="mt-4 w-full text-white font-bold py-2 px-4 rounded-lg next">
        Create an account
          </button>
   
        
        <p className="text-center text-gray-400 text-xs mt-6">
          This site is protected by Google&apos;s <a href="#" className="text-blue-500 underline">Privacy Policy</a> and <a href="#" className="text-blue-500 underline">Terms of Service</a> apply.
        </p>
      </div>
    </div>
  );
};

export default Register;
