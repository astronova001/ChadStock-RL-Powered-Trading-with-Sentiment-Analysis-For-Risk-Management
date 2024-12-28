import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Registration.css';

const Registration = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = () => {
        navigate('/login'); 
    }   


    const handleSubmit = (e) => {
        e.preventDefault();
        if (step === 1) {
            setStep(2);
        } else {
            // Handle final submission
            console.log(formData);
        }
    };

    return (
        <div className="register">
            <div className="side1">
                <div className="header" onClick={() => setStep(1)} style={{cursor:'pointer'}}>
                    <img
                        className="logo"
                        alt="ChadStock"
                        src="src/assets/images/chad_stock.png"
                    />
                    <h1>ChadStock</h1>
                </div>
                <div className="quote">
                    <p>“The single most important reason that people lose money in the financial markets is that they don't cut their losses short.”</p>
                    <p>– Victor Sperandeo</p>
                </div>
            </div>
            <div className="side2">
                <button className="login-button" onClick={handleLogin}>Login</button>
                <div className="form-container">
                    <h2>Create an account</h2>
                    <p>Enter your email below to create your account</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {step === 2 && (
                            <>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </>
                        )}
                        <button type="submit">
                            {step === 1 ? 'Sign Up with Email' : 'Register'}
                        </button>
                    </form>
                    {step === 1 && (
                        <>
                            <div className="divider">
                                <span>OR CONTINUE WITH</span>
                            </div>
                            <div className="auth-options">
                                <button className="auth-button">
                                    <img alt="Apple" src="src/assets/images/apple-logo.svg" />
                                </button>
                                <button className="auth-button">
                                    <img alt="GitHub" src="src/assets/images/github-logo.svg" />
                                </button>
                                <button className="auth-button">
                                    <img alt="Google" src="src/assets/images/google_logo.svg" />
                                </button>
                            </div>
                        </>
                    )}
                    <p className="terms">
                        By clicking continue, you agree to our <a href="https://ui.shadcn.com/terms" target="_blank">Terms of Service</a> and <a href="https://ui.shadcn.com/privacy" target="_blank">Privacy Policy</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;