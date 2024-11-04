export const updatePaciente = async (id, updatedData) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    };

    try {
        const response = await fetch(`http://localhost:5032/api/paciente/${id}`, options);

        if (!response.ok) {
            throw new Error('Erro ao atualizar paciente');
        }

        const data = await response.text(); 
        return data ? JSON.parse(data) : {}; 
    } catch (error) {
        console.error('Erro na requisição PUT:', error);
        throw error;
    }
};
