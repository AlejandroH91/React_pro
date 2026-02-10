import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

function Bienvenida() {
    return (
        <div className="text-center">
            <h1>Bienvenido a la práctica de React</h1>

            <div className="d-flex justify-content-center gap-4 mt-3">
                <img src={reactLogo} alt="React logo" width="100" />
                <img src={viteLogo} alt="Vite logo" width="100" />
            </div>
        </div>
    );
}

export default Bienvenida;