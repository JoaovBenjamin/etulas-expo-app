export const createPaciente = async (novoPaciente) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoPaciente),
    };
    
    try {
        const response = await fetch('http://localhost:5032/api/paciente/', options); // Correção aqui

        if (!response.ok) {
            const errorMessage = await response.text(); // Captura a mensagem de erro
            throw new Error(`Erro ao adicionar paciente: ${errorMessage}`);
        }

        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Erro na requisição POST:', error);
        throw error;
    }
};
