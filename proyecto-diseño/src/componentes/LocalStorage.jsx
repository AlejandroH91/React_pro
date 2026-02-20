import { useState, useEffect } from 'react';
function LocalStorage() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

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
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">

                    <div className="card shadow-sm border-0">
                        <div className="card-header bg-primary text-white text-center">
                            <h4 className="mb-0">Formulario con LocalStorage</h4>
                        </div>

                        <div className="card-body p-4 p-md-5">
                            <form onSubmit={guardarDatos}>
                                <div className="mb-4">
                                    <label htmlFor="nombre" className="form-label fw-semibold">
                                        Nombre
                                    </label>
                                    <input type="text"className="form-control form-control-lg"id="nombre"placeholder="Escribe tu nombre"value={nombre}
                                        onChange={(e) => setNombre(e.target.value)} required />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label fw-semibold">
                                        Email
                                    </label>
                                    <input type="email"className="form-control form-control-lg" id="email"placeholder="ejemplo@correo.com" value={email}
                                        onChange={(e) => setEmail(e.target.value)} required/>
                                </div>

                                <div className="d-grid gap-3 mt-4">
                                    <button type="submit" className="btn btn-outline-primary btn-lg">
                                        Guardar Datos
                                    </button>

                                    <button type="button" className="btn btn-outline-danger btn-lg"
                                        onClick={limpiarDatos} >
                                        Limpiar Datos
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LocalStorage;
