import { useState, useEffect } from "react";    
import "./FormularioComponente.css"

const Formulario3 = () => {
    const [usuarios, setUsuarios] = useState(JSON.parse(localStorage.getItem('usuarios')) || []);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        console.log(usuarios);
    }, [usuarios]);

    const handlerguardarUsuario = (e) => {
        e.preventDefault();
        const nuevoUsuario = { nombre, email };
        setUsuarios([...usuarios, nuevoUsuario]);
        setNombre('');
        setEmail('');
    };

    return (
        <div>
            <h2>Formulario de Usuarios</h2>
            <form onSubmit={handlerguardarUsuario}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">Guardar Usuario</button>
            </form>
            <h3>Usuarios Guardados:</h3>
            <ul>
                {usuarios.map((usuario, index) => (
                    <li key ={index}>{usuario.nombre} - {usuario.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default Formulario3;