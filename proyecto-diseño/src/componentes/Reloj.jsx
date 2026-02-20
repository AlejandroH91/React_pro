import React, { useState, useEffect } from "react";

function Reloj() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setHora(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container ">
            <div className=" justify-content-between align-items-center gap-4">
                <div className="">
                    <div className="bg-success text-white rounded fw-bold fs-2 text-center">
                        {hora}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reloj; 