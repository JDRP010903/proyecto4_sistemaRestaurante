import "../css/reservacionesPageStyles.css"

const ReservacionesPage = () => {
    return (
        <>
            <h1 className="text-center" style={{ color: 'var(--color3)' }}>Reservaciones</h1>
            <hr />
            <div className="row-col">
                <p style={{ color: 'var(--color2)' }}>
                    Hacer una reservación en Los Rosales te garantiza una mesa en nuestro acogedor comedor, 
                    permitiéndote disfrutar de una experiencia gastronómica sin igual sin la espera. Benefíciate de nuestro 
                    servicio personalizado y asegúrate de que tus ocasiones especiales sean memorables. Recomendamos reservar 
                    con anticipación, especialmente para cenas de fin de semana, festividades y eventos especiales.
                </p>
            </div>
            <div className="row-col">
                <div className="text-start">
                    <h4 style={{ color: 'var(--color3)'}}>Horarios de Reservación:</h4>
                </div>
                <div className="contenedorHorarios">
                    <p style={{ color: 'var(--color2)' }}>
                        - Lunes a Viernes: 12:00 PM - 10:00 PM
                    </p>
                    <p style={{ color: 'var(--color2)' }}>
                        - Sábados y Domingos: 10:00 AM - 11:00 PM
                    </p>
                </div>
                <div>
                    <p className="text-center" style={{ color: 'var(--color2)' }}>Para grupos grandes o eventos privados, por favor contáctanos directamente.</p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12 text-start">
                    <h4 style={{ color: 'var(--color3)'}}>Realiza tu Reservación Aquí</h4>
                </div>
                <div className="col">
                    <form className="mt-3">
                        <div className="mb-3">
                            <label htmlFor="reservationDate" className="form-label" style={{ color: 'var(--color2)' }}>Fecha</label>
                            <input type="date" className="form-control" id="reservationDate" name="reservationDate" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="reservationTime" className="form-label" style={{ color: 'var(--color2)' }}>Hora</label>
                            <input type="time" className="form-control" id="reservationTime" name="reservationTime" min="10:00" max="22:00" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="numberOfGuests" className="form-label" style={{ color: 'var(--color2)' }}>Número de Personas</label>
                            <input type="number" className="form-control" id="numberOfGuests" name="numberOfGuests" min="1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="specialRequests" className="form-label" style={{ color: 'var(--color2)' }}>Peticiones Especiales</label>
                            <textarea className="form-control" id="specialRequests" name="specialRequests" rows="3"></textarea>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn botonReservacion" >Enviar Reservación</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ReservacionesPage
