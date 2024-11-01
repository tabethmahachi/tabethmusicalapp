import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/router';

const NewLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        const user = JSON.stringify({
            "email": email,
            "password": password
        });

        try {
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:4071/user_blockchain_api/user/signIn',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: user
            };

            const response = await axios.request(config);
            console.log('Login successful:', response.data);
            router.push('/');
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-1/3">
                <h2 className="text-2xl font-bold mb-6 text-center text-black">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-2 p-2 w-full border rounded text-black"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-2 p-2 w-full border rounded text-black"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">
                        Dont have account? <a href="/signup" className="text-blue-500 hover:underline"> Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewLogin;
