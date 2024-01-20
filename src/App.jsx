import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


import  { registrarUsuario, mostrarUsuarios } from './backend/dbOperations.js'

function App() {

  //Función para registrar usuario
  const registraUsuario = async () => {
    try {
      // Obtener valores del formulario
      const inputNombre = document.getElementById("inputNombre");
      const inputApellido = document.getElementById("inputApellido");
      const inputGenero = document.getElementById("inputGenero");
      const inputCorreo = document.getElementById("inputCorreo");
      const inputContrasena = document.getElementById("inputContrasena");
      const inputConfContrasena = document.getElementById("inputConfContrasena");
  
      // Variables para mandar a la función
      const nombre = inputNombre.value;
      const apellido = inputApellido.value;
      const genero = inputGenero.value;
      const correo = inputCorreo.value;
      const contrasena = inputContrasena.value;
      const confContrasena = inputConfContrasena.value;

      // Validación contraseña
      if (contrasena !== confContrasena) {
        alert("Las contraseñas no coinciden.");
        inputContrasena.value = '';
        inputConfContrasena.value = '';
        return;
      }

      // Llamar a registrarUsuario
      const resultado = await registrarUsuario(nombre, apellido, correo, contrasena, genero);
      console.log(resultado.message);
      
      // Limpiar datos
      inputNombre.value = '';
      inputApellido.value = '';
      inputGenero.value = '';
      inputCorreo.value = '';
      inputContrasena.value = '';
      inputConfContrasena.value = '';
    } catch(error) {
      console.log("Error al registrar usuario", error)
    }
  }

  // Función para obtener usuarios
  const obtenerUsuarios = async () => {
    try {
        const datos = await mostrarUsuarios('nombreDeTuColeccion');
        console.log(datos);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row-col">
            <h1>Pruebas BACK-END</h1>
        </div>
        <hr />
        <div className="row-col">
          <h4>Prueba Registrar Usuario</h4>
          <form>
          <div className="mb-3">
            <input type="text" className="form-control" id="inputNombre" placeholder="Nombre" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" id="inputApellido" placeholder="Apellido" />
          </div>
          <div className="mb-3">
            <select className="form-select" id="inputGenero" aria-label="Default select example">
                <option defaultValue="">Género</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
            </select>
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" id="inputCorreo" placeholder="Correo" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control mb-3" id="inputContrasena" placeholder="Contraseña" />
            <input type="password" className="form-control" id="inputConfContrasena" placeholder="Confirmar Contraseña" />
          </div>
          <button type="button" className="btn btn-primary" onClick={registraUsuario}>Registrar</button>
          </form>
        </div>

        <div className="row-col mt-3">
          <h4>Prueba Mostrar datos</h4>
          <button type="button" className="btn btn-info" onClick={obtenerUsuarios}>Obtener Usuarios</button>
        </div>
      </div>
    </>
  )
}

export default App
