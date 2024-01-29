
const SugerenciasModal = () => {
    return (
        <>
            {/* Modal */}
            <div className="modal fade" id="sugerenciasModal" tabIndex="-1" aria-labelledby="sugerenciasModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="sugerenciasModalLabel">Sugerencias</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit="" className="mt-3">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label" style={{ color: 'var(--color2)' }}>Nombre:</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label" style={{ color: 'var(--color2)' }}>Correo Electrónico:</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="suggestionType" className="form-label" style={{ color: 'var(--color2)' }}>Tipo de Sugerencia:</label>
                                <select className="form-select" id="suggestionType" >
                                    <option value="">Selecciona una opción</option>
                                    <option value="service">Servicio</option>
                                    <option value="menu">Menú</option>
                                    <option value="ambience">Ambiente</option>
                                    <option value="other">Otro</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="suggestion" className="form-label" style={{ color: 'var(--color2)' }}>Sugerencia:</label>
                                <textarea className="form-control" id="suggestion" rows="3" ></textarea>
                            </div>
                        </form>
                        <p>Le agradecemos la sugerencia. Trabajaremos en ella</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Enviar</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SugerenciasModal
