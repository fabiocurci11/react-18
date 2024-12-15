import React, { useState } from 'react';

const AddForm = ({sendFormData}) => {
    // Stato per i campi del form
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        description: '',
        date: '',
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
        sendFormData(formData)
        console.log(formData)
        setFormData({ id: '', title: '', description: '', date: '' }); // Resetta il form
    };

    const isFormValid = formData.title.trim() !== '' && 
                        formData.description.trim() && 
                        formData.date.trim()


    return (
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-5 justify-center text-black'>
                <div>
                    <label>Title</label>
                    <input
                        id="title"
                        name="title"
                        className='w-full p-2'
                        type="text"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Description</label>
                    <textarea
                        id="description"
                        name="description"
                        className='w-full p-2'
                        value={formData.description}
                        onChange={handleChange}
                        rows="4" // Numero di righe visibili
                        placeholder="Scrivi il tuo messaggio qui..."
                    />
                </div>

                <div>
                    <label>Data</label>
                    <input
                        type="date"
                        className='w-full p-2'
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>

                <div className='flex gap-2 justify-end text-white'>
                    <button
                        className='bg-slate-800 rounded-lg p-2'
                        disabled={!isFormValid}
                        type="submit">
                        Add
                    </button>

                    <button
                        className='bg-slate-500 rounded-lg p-2'
                        type="submit">
                        Cancel
                    </button>
                </div>


            </div>
        </form>
    );
};

export default AddForm;