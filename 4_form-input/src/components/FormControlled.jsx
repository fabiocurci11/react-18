import React, { useState } from 'react';

const FormControlled = ({sendFormData}) => {
    // Stato per i campi del form
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    // Funzione per gestire i cambiamenti negli input
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Funzione per gestire l'invio del form
    const handleSubmit = (event) => {
        event.preventDefault(); // Evita il refresh della pagina
        console.log('Dati inviati:', formData);
        // Puoi fare ulteriori operazioni come inviare i dati a un'API
        sendFormData(formData)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Inserisci il tuo nome"
                    />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Inserisci la tua email"
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Inserisci la tua password"
                    />
                </div>

                <button type="submit">Invia</button>
            </form>
        </div>
    );
};

export default FormControlled;