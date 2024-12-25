// src/services/apiService.js

const API_URL = import.meta.env.VITE_APP_API_URL;


export const testHttp = async () => {
  try {
    const response = await fetch(`${API_URL}/helloLogin`);
 
    if (!response.ok) {
      throw new Error(`Errore HTTP: ${response.status}`);
    }
    const data = await response.text();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signupUser = async (user) => {
    try {
      const response = await fetch(`${API_URL}/signupUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user), // Serializza lo user in formato JSON
      });
  
      if (!response.ok) {
        throw new Error(`Errore HTTP: ${response.status}`);
      }
  
      const data = await response.json(); // Supponendo che il server restituisca l'oggetto salvato
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  export const loginUser = async (user) => {
    try {
      // Fai una richiesta POST al server per il login
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Indica che stiamo inviando dati in formato JSON
        },
        body: JSON.stringify(user), // Serializza l'oggetto 'user' in formato JSON
      });
  
      // Verifica se la risposta è ok
      if (!response.ok) {
        throw new Error(`Errore HTTP: ${response.status}`);
      }
  
      // Ottieni la risposta dal server (in questo caso una stringa di successo o errore)
      const data = await response.text(); // Assumiamo che il server ritorni una stringa
      return data; // Restituisce la risposta del server
    } catch (error) {
      throw new Error(`Errore nella richiesta di login: ${error.message}`);
    }
  };
  
  
