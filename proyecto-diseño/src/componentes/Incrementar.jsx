import { useState } from 'react';


function Incrementar() {

    const añoactual = new Date().getFullYear();
    const [año, setaño] = useState(añoactual);
    return (
        <div className="container py-5">
            <h1 className="fs-4 mb-3">Año actual: {año}</h1>
            <button className="btn btn-primary me-2" onClick={() => setaño(año + 1)}>Aumentar año</button>
            <button className="btn btn-primary" onClick={() => setaño(año - 1)}>Retroceder año</button>
            
            <div className="mt-5 text-center"  readOnly>
                {`Estamos en el año ${año}. desde 2026 hay una diferencia de ${2026 - año} años.`}
            </div>
        </div>

    )


}
export default Incrementar;