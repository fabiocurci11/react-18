import { useState, useEffect } from 'react'
import './App.css'
import { testHttp, saveStudent } from "./apiService";

function App() {

 
  const [data, setData] = useState(null); // Stato per i dati
  const [error, setError] = useState(null); // Stato per gli errori
  const [loading, setLoading] = useState(false); // Stato per il caricamento
  const [studentSaved, setStudentSaved] = useState(null); // Stato per lo studente salvato

  const student = {
    firstName: "mimmo",
    lastName: "san",
    email: "mimmo.san@example.com",
    password: "pass"
  };


  const handleSaveStudent = async () => {
    try {
      const savedStudent = await saveStudent(student); // Salva lo studente
      setStudentSaved(savedStudent); // Aggiorna lo stato con lo studente salvato
      console.log('Studente salvato con successo:', savedStudent);
    } catch (error) {
      console.error('Errore durante il salvataggio dello studente:', error.message);
      setError(error.message); // Gestisce eventuali errori
    }
  };


  const fetchData = async () => {
    setLoading(true); // Inizia il caricamento
    setError(null); // Pulisce eventuali errori

    try {
      const result = await testHttp(); // Chiamata al servizio API
      setData(result); // Imposta i dati ricevuti
    } catch (err) {
      setError(err.message); // Gestisce eventuali errori
    } finally {
      setLoading(false); // Ferma il caricamento
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Effettua la chiamata quando il componente viene montato

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

 

  return (
    <>
      <div>
        <h1>Result: {data}</h1>
        {studentSaved && (
          <div>
            <h2>Studente salvato con successo:</h2>
            <p>
              Nome: {studentSaved.firstName} <br />
              Cognome: {studentSaved.lastName} <br />
              Email: {studentSaved.email}
            </p>
          </div>
        )}
        <button onClick={handleSaveStudent}>Salva Studente</button>
      </div>
    </>
  );

}


export default App
