import React from "react";

export function CardContent({
  titulo,
  descripcion,
  persona,
  fechaInicio,
  fechaFin,
}) {
  return (
    <>
      <h1> {titulo} </h1>
      <div className="container">
        <p> {descripcion} </p>
        <p> {persona} </p>
        <p> {fechaInicio} </p>
        <p> {fechaFin} </p>
      </div>
    </>
  );
}
