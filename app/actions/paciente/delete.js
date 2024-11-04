export async function deletePaciente(id){
    try {
        const response = await fetch(`http://localhost:5032/api/paciente/${id}`, {
          method: 'DELETE', 
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete paciente');
        }
  
        console.log('Paciente deleted successfully!');
  
      } catch (error) {
        console.error('Error deleting paciente:', error);
      }
}