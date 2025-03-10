import React, { useState } from "react";




const TrafficLight = () => {

    const [color, setcolor] = useState("");
    const [AñadirPurpura, setAñadirPurpura] = useState(false);
    const Change = () => {
        switch (color) {
            case "red": setcolor("yellow"); break;
            case "yellow": setcolor("green"); break;
            case "green": setcolor("purple"); break;
            case "purple": setcolor("red"); break;

            default: setcolor("red")
        }
    };
    const Cambio = () => {
        setAñadirPurpura(!AñadirPurpura);

    }




    return (
        <div className="container">
            <div className="traffic-light">
                <div onClick={() => setcolor("red")} className={`light red ${color === 'red' ? 'active' : ''}`}></div>
                <div onClick={() => setcolor("yellow")} className={`light yellow ${color === 'yellow' ? 'active' : ''}`}></div>
                <div onClick={() => setcolor("green")} className={`light green ${color === 'green' ? 'active' : ''}`}></div>
                {AñadirPurpura && (
                    <div onClick={() => setcolor("purple")} className={`light purple ${color === 'purple' ? 'active' : ''}`}></div>)}
            </div>
            <div>
                <button onClick={Change} className="btn btn-warning">Cambiar de color</button>
                <button onClick={Cambio} className="btn btn-primary">{AñadirPurpura ? "Quitar purpura" : "Añadir purpura"}</button>
            </div>
        </div >
    );
};



export default TrafficLight;
