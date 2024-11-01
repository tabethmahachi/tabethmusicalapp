import React, { useState } from 'react';

const NewLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return ( <
        div className = "min-h-screen flex items-center justify-center bg-gray-100" >
        <
        div className = "bg-white p-8 rounded shadow-md w-1/3" >
        <
        h2 className = "text-2xl font-bold mb-6 text-center text-black" > Login < /h2> <
        form onSubmit = { handleLogin } >
        <
        div className = "mb-4" >
        <
        label htmlFor = "email"
        className = "block text-gray-700" > Email < /label> <
        input type = "email"
        id = "email"
        className = "mt-2 p-2 w-full border rounded"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        required /
        >
        <
        /div> <
        div className = "mb-6" >
        <
        label htmlFor = "password"
        className = "block text-gray-700" > Password < /label> <
        input type = "password"
        id = "password"
        className = "mt-2 p-2 w-full border rounded"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        required /
        >
        <
        /div> <
        button type = "submit"
        className = "w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200" >
        Login <
        /button> < /
        form > <
        div className = "mt-4 text-center" >
        <
        p className = "text-gray-600" >
        Don 't have an account? <
        a href = "/signup"
        className = "text-blue-500 hover:underline" > Sign Up < /a> < /
        p > <
        p className = "mt-2" >
        <
        a href = "/forgot-password"
        className = "text-blue-500 hover:underline" > Forgot Password ? < /a> < /
        p > <
        /div> < /
        div > <
        /div>
    );
};

export default NewLogin;