import React, { useState } from 'react';

import { loginUser } from "../service/loginService";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      // Crea l'oggetto 'user' da inviare
      const user = { email, password };
  
      try {
        // Chiama la funzione per fare la richiesta di login
        const result = await loginUser(user);
  
        // Mostra il messaggio restituito dal server (ad esempio "Login effettuato con successo!")
        setMessage(result);
      } catch (error) {
        // Mostra un errore se la richiesta fallisce
        setMessage(`Errore: ${error.message}`);
      }
    };
  

    return (
        <div>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          {message && <p>{message}</p>} {/* Mostra il messaggio di successo o errore */}
        </div>
      );
};

export default Login;


  
  