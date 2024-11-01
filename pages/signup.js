import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/router';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [roleName, setRoleName] = useState('artist'); // Default value
    const [errorMessage, setErrorMessage] = useState('');

    const router = useRouter();

    const handleSignUp = async(e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        setErrorMessage('');

        const user = JSON.stringify({
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "roleName": roleName,
        });
        console.log(user);
        try {
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:4071/user_blockchain_api/create_user',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: user
            };
            axios.request(config)
                .then((response) => {
                    router.push('/paymentselect');
                    console.log(JSON.stringify(response.data));
                    localStorage.setItem('user', JSON.stringify(response.data));
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.error('There was an error creating the user:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-1/3">
                <h2 className="text-2xl font-bold mb-6 text-center text-black">Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-700">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            className="mt-2 p-2 w-full border rounded text-black"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            className="mt-2 p-2 w-full border rounded text-black"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
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

                    <div className="mb-4">
                        <label htmlFor="roleName" className="block text-gray-700">Role</label>
                        <select
                            id="roleName"
                            className="mt-2 p-2 w-full border rounded text-black"
                            value={roleName}
                            onChange={(e) => setRoleName(e.target.value)}
                            required
                        >
                            <option value="artist">Artist</option>
                            <option value="listener">Listener</option>
                        </select>
                    </div>
                    <div className="mb-4">
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
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="mt-2 p-2 w-full border rounded text-black"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        {errorMessage && (
                            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                        )}
                    </div>
                 
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">
                        Already have an account?{' '}
                        <a href="/login" className="text-blue-500 hover:underline">Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
