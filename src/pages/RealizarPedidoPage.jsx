import "../css/realizarPedidoPageStyles.css"

const RealizarPedidoPage = () => {
    return (
        <>
            <h1 className="text-center" style={{ color: 'var(--color3)' }}>Pide en línea</h1>
            <hr />
            <div className="row-col">
                <p style={{ color: 'var(--color2)' }}>
                    Pedir en línea en Los Rosales simplifica tu experiencia gastronómica al permitirte elegir cómodamente desde nuestra amplia selección de platos, garantizando precisión y conveniencia en cada pedido. Este servicio no solo reduce los tiempos de espera, asegurando que tu comida esté lista cuando tú lo estés, sino que también te brinda la flexibilidad de programar recogidas según tu horario, haciendo que disfrutar de tus favoritos sea más fácil y accesible que nunca.
                </p>
            </div>
            <div className="row-col mt-4">
                <div className="text-start">
                    <h4 style={{ color: 'var(--color3)' }}>Horarios de Recogida:</h4>
                </div>
                <div className=" contenedorHorarios">
                    <p style={{ color: 'var(--color2)' }}>
                        - Lunes a Viernes: 11:00 AM - 9:00 PM
                    </p>
                    <p style={{ color: 'var(--color2)' }}>
                        - Sábados y Domingos: 12:00 PM - 10:00 PM
                    </p>
                </div>
            </div>
            <hr />
            <div className="col-12 text-start">
                    <h4 style={{ color: 'var(--color3)'}}>Realiza tu Pedido Aquí</h4>
                </div>
            <div className="row-col">
                <form className="mt-3">
                    {/* Detalles del Pedido */}
                    <div className="mb-3 text-center">
                        <label htmlFor="itemName" className="form-label textoPlatillo" style={{ color: 'var(--color2)' }}>Platillo</label>
                        <input type="text" className="form-control" id="itemName" placeholder="Nombre del platillo" />
                        <button type="button" className="btn btn-sm mt-2 text-center" style={{ backgroundColor: 'var(--color3)', color: 'var(--color1)' }}>Añadir Platillo</button>
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label" style={{ color: 'var(--color2)' }}>Nombre</label>
                        <input type="text" className="form-control" id="name" placeholder="Tu nombre" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label" style={{ color: 'var(--color2)' }}>Correo eléctronico</label>
                        <input type="email" className="form-control" id="phone" placeholder="Tu correo electrónico" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label" style={{ color: 'var(--color2)' }}>Teléfono</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Tu teléfono" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pickupTime" className="form-label" style={{ color: 'var(--color2)' }}>Hora de Recogida</label>
                        <input type="time" className="form-control" id="pickupTime" />
                    </div>
                    
                    {/* Botón de Envío */}
                    <button type="submit" className="btn" style={{ backgroundColor: 'var(--color3)', color: 'var(--color1)' }}>Enviar Pedido</button>
                </form>
            </div>
        </>
    )
}

export default RealizarPedidoPage
