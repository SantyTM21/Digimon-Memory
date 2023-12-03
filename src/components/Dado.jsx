import React, { useState } from "react";
import "./Dado.css";

import uno from "../img/dado-1.png";
import dos from "../img/dado-2.png";
import tres from "../img/dado-3.png";
import cuatro from "../img/dado-4.png";
import cinco from "../img/dado-5.png";
import seis from "../img/dado-6.png";

const Dado = () => {
  const [imagenDado, setImagenDado] = useState(dos);

  const handleRoll = () => {
    const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
    switch (numeroAleatorio) {
      case 1:
        setImagenDado(uno);
        break;
      case 2:
        setImagenDado(dos);
        break;
      case 3:
        setImagenDado(tres);
        break;
      case 4:
        setImagenDado(cuatro);
        break;
      case 5:
        setImagenDado(cinco);
        break;
      case 6:
        setImagenDado(seis);
        break;
      default:
        break;
    }
    const miDiv = document.getElementById("dice");

    // Agregar la clase
    miDiv.classList.add("destacar");

    // Eliminar la clase después de 1 segundo
    setTimeout(function () {
      miDiv.classList.remove("destacar");
    }, 400);
  };

  return (
    <div id="dice" className="contenedor">
      Dado: <img onClick={handleRoll} src={imagenDado} alt="dice" />
    </div>
  );
};

export default Dado;
