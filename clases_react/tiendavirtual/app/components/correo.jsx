import 'bootstrap/dist/css/bootstrap.min.css';

const Correo = () => {
  return (
    <div className="container colo1 w-75 mb-5">
      <div className="row">
        <div className="col-2">
        </div>
        <div className="col mt-10 mb-10">
          <h1>POESIAS EN TU CORREO</h1>
          <p>Suscribite para recibir los nuevos poemas mensualmente</p>
        </div>
        <div className="col mt-10">
          <div className="input-group">
            <input
              className="form-control" 
              placeholder="E-mail Address"
              type="email" 
            />
            <div className="input-group-append">
              <button className="btn btn-dark text-white">SUBSCRIBITE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Correo;





