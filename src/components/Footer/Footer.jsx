import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";



const Footer = () => {

  const [ usuario, setUsuario] = useState("");
  const [ password, setPassword] = useState("");
  const { user, setUser } = useContext(CartContext);

  return (
    <div>
      {user ? <p className="text-info display-4 text-capitalize">Bienvenido {user}</p> : <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Iniciar Session
        </button>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content bg-dark">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ingrese</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                <label htmlFor="">Usuario: </label>
                <input type="text" 
                        className="input-usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)} 
                        placeholder="ingrese usuario"
                        required/>
                        <br></br>
                <label htmlFor="">Contraseña: </label>
                <input type="text" 
                        className="input-usuario"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="ingrese contraseña"
                        required/>
                        <br></br>
                {password.length > 4 && <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={() => setUser(usuario)}>Enter</button>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>}
      <h4 className="titulo-footer text-center">&copy;Todos los Derechos Reservados</h4>
    </div>
  )
}

export default Footer;