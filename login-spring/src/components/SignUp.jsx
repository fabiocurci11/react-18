import React, { useState } from 'react';

import { signupUser } from "../service/loginService";

const Signup = () => {


    const [user, setUser] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
    });

    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const data = await signupUser(user);
            setMessage("Registrazione avvenuta con successo!");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <div>
                <h1>Registrazione Utente</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Nome:
                        <input
                            type="text"
                            name="firstName"
                            value={user.firstName}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Cognome:
                        <input
                            type="text"
                            name="lastName"
                            value={user.lastName}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <button type="submit" disabled={loading}>
                        {loading ? "Registrazione in corso..." : "Registrati"}
                    </button>
                </form>

                {message && <p>{message}</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>

        </>

    );
};

export default Signup;


