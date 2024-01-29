import "../css/menuPageStyles.css"

const MenuPage = () => {
    return (
        <>
            <div className="menu-container py-5">
                <div className="container">
                    <h1 className="text-center mb-5" style={{ color: 'var(--color3)' }}>Nuestro Menú</h1>

                    <hr />

                    <h3 className="text-start mb-5" style={{ color: 'var(--color3)' }}>Entradas</h3>
                    
                    <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="menu-item p-4 text-center" style={{ backgroundColor: 'var(--color5)' }}>
                            <img src="https://cloudinary-cdn.whisk.com/image/upload/g_auto,c_fill,q_60,f_auto,h_630,w_1200/v1619901691/recipe/a75dd166e2b9282f2b52d3babd055e75.jpg" alt="Carpaccio de Res" />
                            <h4 style={{ color: 'var(--color2)' }}>Carpaccio de Res</h4>
                            <p className="text-start" style={{ color: 'var(--color3)' }}>Delicadas láminas de res marinadas en aceite de oliva extra virgen, adornadas con alcaparras y lascas de queso parmesano, una entrada que combina sabor y elegancia.</p>
                            <p className="text-muted text-start">Precio: $180 MXN</p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="menu-item p-4" style={{ backgroundColor: 'var(--color5)' }}>
                            <img src="ruta-a-la-imagen-de-la-ensalada-cesar.jpg" alt="Ensalada César" />
                            <h4 style={{ color: 'var(--color2)' }}>Ensalada César</h4>
                            <p style={{ color: 'var(--color3)' }}>La clásica ensalada César con crujientes crutones, queso parmesano rallado y nuestra especial salsa César, perfecta para comenzar tu experiencia culinaria.</p>
                            <p className="text-muted">Precio: $150 MXN</p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="menu-item p-4" style={{ backgroundColor: 'var(--color5)' }}>
                            <img src="ruta-a-la-imagen-de-la-provoleta.jpg" alt="Provoleta" />
                            <h4 style={{ color: 'var(--color2)' }}>Provoleta</h4>
                            <p style={{ color: 'var(--color3)' }}>Queso provolone fundido a la parrilla con un toque de orégano y aceite de oliva, servido con pan tostado para una entrada irresistible.</p>
                            <p className="text-muted">Precio: $160 MXN</p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="menu-item p-4" style={{ backgroundColor: 'var(--color5)' }}>
                            <img src="ruta-a-la-imagen-de-las-empanadas-de-carne.jpg" alt="Empanadas de Carne" />
                            <h4 style={{ color: 'var(--color2)' }}>Empanadas de Carne</h4>
                            <p style={{ color: 'var(--color3)' }}>Tradicionales empanadas argentinas rellenas de una jugosa mezcla de carne cortada a cuchillo, huevo, aceitunas y especias, horneadas a la perfección.</p>
                            <p className="text-muted">Precio: $130 MXN c/u</p>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuPage
