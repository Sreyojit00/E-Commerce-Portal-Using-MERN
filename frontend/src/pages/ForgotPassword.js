import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate an API call to send the reset email
        setTimeout(() => {
            // Display success toast first
            toast.success('Email sent to your registered email account!');
            // Navigate to login page after displaying the toast
            setTimeout(() => {
                navigate('/login');
            }, 3000); // Delay navigation to ensure toast visibility
        }, 1000);
    };

    return (
        <section className="bg-gray-100 py-12">
            <ToastContainer />
            <div className="max-w-md mx-auto px-4">
                <h2 className="text-4xl font-semibold mb-6 text-teal-800 text-center">Forgot Password</h2>
                <form className="bg-white p-8 shadow-lg rounded-lg" onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email" className="text-sm text-teal-600 mb-1">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email address"
                            className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600 transition duration-300 w-full">
                        Send Reset Link
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ForgotPassword;
