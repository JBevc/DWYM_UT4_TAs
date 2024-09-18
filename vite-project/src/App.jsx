import { useState } from "react";
import { Card } from "./componentes/card/index.jsx";
import { Card_conChildren } from "./componentes/card_conChildren/index.jsx";
import { CardContent } from "./componentes/card_content/index.jsx";
import { Form } from "./componentes/form/index.jsx";
import { Contador } from "./componentes/contador/index.jsx";
import "./App.css";

function App() {
  return (
    <>
      <h1> TAs UT5 Desarrollo Web </h1>
      <div class="elemento">
        <h3> TA1</h3>
        <Card
          titulo="Titulo1"
          descripcion="hola"
          persona="persona"
          fechaInicio="lunes"
          fechaFin="martes"
        />
        <Card
          titulo="Titulo2"
          descripcion="hola"
          persona="persona"
          fechaInicio="lunes"
          fechaFin="martes"
        />
        <Card
          titulo="Titulo3"
          descripcion="hola"
          persona="persona"
          fechaInicio="lunes"
          fechaFin="martes"
        />
      </div>

      <div class="elemento">
        <h3>TA2</h3>
        <Card_conChildren>
          <CardContent
            titulo="Titulo 2"
            descripcion="..."
            persona="otra persona"
            fechaInicio="una fecha"
            fechaFin="otra fecha"
          />
        </Card_conChildren>
      </div>
      <div class="elemento">
        <h3> TA3</h3>
        <div className="card">
          <Form />
        </div>
      </div>

      <div class="elemento">
        <h3> TA4</h3>
        <div className="card">
          <Contador> </Contador>
        </div>
      </div>
    </>
  );
}

export default App;
