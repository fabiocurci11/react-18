// src/services/apiService.js

const API_URL = import.meta.env.VITE_APP_API_URL;


export const testHttp = async () => {
  try {
    const response = await fetch(`${API_URL}/helloFaby`);
 
    if (!response.ok) {
      throw new Error(`Errore HTTP: ${response.status}`);
    }
    const data = await response.text();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const saveStudent = async (student) => {
    try {
      const response = await fetch(`${API_URL}/saveStudent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student), // Serializza lo studente in formato JSON
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
  
