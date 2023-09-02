import React, { useState } from 'react';
import PocketBase from 'pocketbase';
import {Navbar} from '@/components'

const Login = ({onLoginStatusChange}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    const pb = new PocketBase('http://127.0.0.1:8090');
    try {
      const authData = await pb.collection('Students').authWithPassword(
        email,
        password
      );

      if (pb.authStore.isValid) {
      
        onLoginStatusChange(true);
      }
    } catch (error) {
     prompt('Authentication error:', error);
     
    }
  
   
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="justify-center bg-white p-8 rounded shadow-md max-w-md w-full object-center">
        <div className='text-center'>
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className='text-center'>
          <button
            type="submit" onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-4 justify-center rounded hover:bg-blue-600"
          >
            Login
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
