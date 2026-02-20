import {useState, useEffect} from 'react';

const Formulario2 = () => {
    const [nombre, setNombre] = useState('');
    const[email, setEmail] = useState('');

    useEffect(() => {
        const nombreGuardado = localStorage.getItem('nombre');
        const emailGuardado = localStorage.getItem('email');
        if (nombreGuardado) setNombre(nombreGuardado);
        if (emailGuardado) setEmail(emailGuardado);
    }, []);

    const guardarDatos = (e) => {
        e.preventDefault();
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('email', email);
        alert('Datos guardados en localStorage');
        console.log(nombre, email);
    };

    const limpiarDatos = () => {
        localStorage.removeItem('nombre');
        localStorage.removeItem('email');
        setNombre('');
        setEmail('');
        alert('Datos eliminados de localStorage');
    };
    return (
        <div>
            <h2>Formulario con localStorage</h2>
            <form onSubmit={guardarDatos}>
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
                <button type="submit">Guardar Datos</button>
            </form>
            <button onClick={limpiarDatos}>Limpiar Datos</button>
        </div>
    );
};

export default Formulario2;