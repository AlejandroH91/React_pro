import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Bienvenida() {

    const params = useParams();
    const [nombre, setNombre] = useState(params.nombre || "");
    const [apellidos, setApellidos] = useState(params.apellidos || "");

    const manejarSubmit = (e) => {
        e.preventDefault();};

    return (
        <div className="text-center">

            <h1>Bienvenido a la práctica de React</h1>
                <h2> {nombre} {apellidos}</h2>
            {/* FORMULARIO */}
            <form onSubmit={manejarSubmit}>
                <input type="text" placeholder="Introduce tu nombre" value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <input
                    type="text" placeholder="Introduce tus apellidos" value={apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                />
            </form>

            <div className="d-flex justify-content-center gap-4 mt-3">
                <img src={reactLogo} alt="React logo" width="100" />
                <img src={viteLogo} alt="Vite logo" width="100" />
            </div>
        </div>
    );
}

export default Bienvenida;
