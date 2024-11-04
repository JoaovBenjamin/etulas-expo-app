export async function getPaciente(){
    const resp = await fetch(`http://localhost:5032/api/paciente/`)
    return await resp.json();
}