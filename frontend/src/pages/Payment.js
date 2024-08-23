import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentSection = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const navigate = useNavigate();

    const handleValidation = () => {
        let formIsValid = true;
        let errors = {};

        // Card Number
        if (!cardNumber || cardNumber.length < 16) {
            formIsValid = false;
            errors['cardNumber'] = 'Card number must be at least 16 digits.';
        }

        // Expiry Date
        if (!expiryDate || !/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(expiryDate)) {
            formIsValid = false;
            errors['expiryDate'] = 'Invalid expiry date format.';
        }

        // CVV
        if (!cvv || cvv.length < 3) {
            formIsValid = false;
            errors['cvv'] = 'CVV must be at least 3 digits.';
        }

        // Cardholder Name
        if (!cardholderName) {
            formIsValid = false;
            errors['cardholderName'] = 'Cardholder name is required.';
        }

        // Show errors using toast
        if (!formIsValid) {
            Object.keys(errors).forEach((key) => {
                toast.error(errors[key]);
            });
        }

        return formIsValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleValidation()) {
            // Simulate payment processing
            setTimeout(() => {
                toast.success('Payment Successful!');
                navigate('/');
            }, 1000);
        } else {
            toast.error('Form has errors.');
        }
    };

    return (
        <section className="bg-gray-100 py-12">
            <ToastContainer />
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-4xl font-semibold mb-6 text-teal-600 text-center">Payment Information</h2>
                <form className="space-y-4 bg-white p-8 shadow-lg rounded-lg" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="card-number" className="text-sm text-teal-600 mb-1">Card Number</label>
                        <input 
                            type="text" 
                            id="card-number" 
                            name="card-number" 
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="Enter card number" 
                            className={`py-2 px-4 border ${cardNumber.length < 16 ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue-500 transition duration-300`} 
                            required 
                        />
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="expiry-date" className="text-sm text-gray-600 mb-1">Expiry Date</label>
                            <input 
                                type="text" 
                                id="expiry-date" 
                                name="expiry-date" 
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                placeholder="MM/YYYY" 
                                className={`py-2 px-4 border ${!expiryDate.match(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/) ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue-500 transition duration-300`} 
                                required 
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="cvv" className="text-sm text-teal-600 mb-1">CVV</label>
                            <input 
                                type="text" 
                                id="cvv" 
                                name="cvv" 
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                placeholder="Enter CVV" 
                                className={`py-2 px-4 border ${cvv.length < 3 ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue-500 transition duration-300`} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="cardholder-name" className="text-sm text-teal-600 mb-1">Cardholder Name</label>
                        <input 
                            type="text" 
                            id="cardholder-name" 
                            name="cardholder-name" 
                            value={cardholderName}
                            onChange={(e) => setCardholderName(e.target.value)}
                            placeholder="Enter cardholder name" 
                            className={`py-2 px-4 border ${!cardholderName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue-500 transition duration-300`} 
                            required 
                        />
                    </div>
                    <button type="submit" className="bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600 transition duration-300 w-full">
                        Pay Now
                    </button>
                </form>
            </div>
        </section>
    );
};

export default PaymentSection;
