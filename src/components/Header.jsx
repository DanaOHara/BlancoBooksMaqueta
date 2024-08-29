/* eslint-disable react/prop-types */
//Reglas JSX:
// 1. Toda etiqueta debe cerrarse.
// 2. Los componentes deben devolver un solo elemento padre.
// 3. Apoyarse de los Fragment cuando necesito devolver 2 elementos.
// 4. No se puede usar if, else, while, switch
// 5. Dos elementos no pueden tener el mismo atributo key
// 6. Siempre debe haber un return() en el componente
// 7. Los comentarios se hacen {/* */}
// 8. Los componentes deben exportarse
// 9. Los componentes deben tener un nombre en PascalCase

//import { Fragment } from 'react' => <Fragment></Fragment>
//import React from 'react' => <React.Fragment></React.Fragment> || <></>
//(este último import se hace en main.jsx)

// >>>>>>> IMPORTAR LIBRERIAS <<<<<<<
export default function Header({cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, isEmpty, cartTotal}) {

    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div className="carrito">
                            <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

                            <div id="carrito" className="bg-white p-3">
                                {isEmpty ? (
                                    <p className="text-center">El carrito esta vacio</p>
                                ) : (
                                    <>
                                        <table className="w-100 table">
                                            <thead>
                                                <tr>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map(product => (
                                                <tr key={product.id}>
                                                    <td><img className="img-fluid" src={`/img/${product.image}.jpg`} alt="imagen guitarra" /></td>
                                                    <td>{product.name}</td>
                                                    <td className="fw-bold">{product.price}</td>
                                                    <td className="flex align-items-start gap-4">
                                                        <button type="button" className="btn btn-dark" onClick={() => decreaseQuantity(product.id)}>-</button>
                                                        {product.quantity}
                                                        <button type="button" className="btn btn-dark" onClick={() => increaseQuantity(product.id)}>+</button>
                                                    </td>
                                                    <td><button className="btn btn-danger" type="button" onClick={() => removeFromCart(product.id)}>X</button></td>
                                                </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <p className="text-end">Total pagar: <span className="fw-bold">{cartTotal}</span></p>
                                        <button className="btn btn-dark w-100 mt-3 p-2" onClick={() => clearCart()}>Vaciar Carrito</button>
                                    </>
                                    )}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
