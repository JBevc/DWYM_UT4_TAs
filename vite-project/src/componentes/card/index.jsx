export function Card(props) {
  return (
    <div className="card">
      <h1> {props.titulo} </h1>
      <div className="container">
        <p> {props.descripcion} </p>
        <p> {props.persona} </p>
        <p> {props.fechaInicio} </p>
        <p> {props.fechaFin} </p>
      </div>
    </div>
  );
}
