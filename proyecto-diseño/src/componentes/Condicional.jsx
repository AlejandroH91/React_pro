function Condicional({ nombre }) {
  return (
    nombre ? <h1>Hola {nombre}</h1> : <h1>Hola invitado</h1>
  );
}

export default Condicional;