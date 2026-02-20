import React from "react";

export const Montar = () => {
  React.useEffect(() => {
    console.log("Componente Montar está montado");

    return () => {
      console.log("Componente Montar está desmontado");
    };
  }, []);

  return (
    <div>
      <h2>Bienvenido al Componente Montar</h2>
      <button
        onClick={() => {
          alert("¡El componente está montado!");
        }}
      >
        Mostrar Alerta
      </button>
    </div>
  );
};