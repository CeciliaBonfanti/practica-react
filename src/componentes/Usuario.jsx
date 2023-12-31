export default function Usuario(props) {
  return (
      <div className="card m-4" style={{width: "20rem",backgroundColor: props.color }}> 
        <img src={props.imagen} className="card-img-top" alt="..." style={{height: "350px", objectFit: "cover"}}/>
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">{props.cargo}</p>
          <a href="#" className="btn btn-primary">{props.conoceme}</a>
        </div>
      </div>
  )
}

