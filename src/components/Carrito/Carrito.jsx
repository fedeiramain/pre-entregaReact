import { useContext } from "react";
import { CartContext } from "../Context/CartContext";


const Carrito = () => {

  const { user, cart, setCart } = useContext(CartContext);

  const subTotal = cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);

  const eliminar = (id) => {
    const carrito = [...cart];
    const index = carrito.findIndex(prod => prod.id === id);
    carrito.splice(index)
    setCart(carrito);
  }


  return (
    <div className="container">
      <h1 className="text-primary">Mi Compra</h1>
      <div className="productos-carrito">
        {
          cart && cart.map((prod) => {
            return (
              <div key={prod.id} className="prod-carrito">
                <div className="nombre-prod">
                  <h3>Nombre</h3>
                  <p>{prod.nombre}</p>
                </div>
                <div className="cantidad-prod">
                  <h3>Cantidad</h3>
                  <p>{prod.cantidad}</p>
                </div>
                <div className="total-prod">
                  <h3>Total</h3>
                  <p>{prod.cantidad * prod.precio}</p>
                </div>
                <button className="btn-eliminar" onClick={eliminar}>Eliminar</button>
              </div>

            )
          })
        }
      </div>
      {cart.length > 0 ? <h3>Cantidad: {subTotal}</h3> : <p className="text-warning">Seleccione sus Productos</p>}
      {user ? <div>
        {cart.length > 0 && <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Pagar
        </button>
        }
        {cart.length > 0 && <button type="button" class="btn btn-primary" onClick={() => setCart([])}>
          Vaciar
        </button>
        }

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h4 className="text-success">Muchas Gracias!!</h4>
              </div>
              <div class="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setCart([])}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div> : <p className="text-danger">Ingrese usuario para pagar</p>}

    </div>
  )
};

export default Carrito;