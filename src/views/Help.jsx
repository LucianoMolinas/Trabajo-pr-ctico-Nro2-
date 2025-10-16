import { Link } from "react-router-dom"
import { useThemeContext } from "../context/ThemeContext"

const Help = () => {

  const { contextTheme } = useThemeContext()

  return (
    <div className="help-page" >

      <header className="header">
        <div className="div-title">
          <h1 className="h1">Documentación de ayuda</h1>
        </div>
        <div className="div-return">
          <p>
            Volver al <Link to="/chat">Chat</Link>
          </p>
        </div>
      </header>

      <main className="body">
        <section className="section-funcion">
          <div className="div-img">
            <img className="img1" src="funcion.jpg" alt="funcionamiento del chat" />
          </div>

          <div className="div-function1">
            <h2 className="h2-fun">Funcionamiento general del chat:</h2>
            <p className="first-p">
              Al iniciar, el usuario debe loguearse con su contraseña en la pantalla de login.
              Si la contraseña ingresada es correcta, el sistema redirige al usuario a la página del chat donde puede ver
              una lista de contactos disponibles. De lo contrario se informa del error.
              Al seleccionar un contacto, se abre una conversación privada que muestra
              los mensajes enviados y recibidos. También cuenta con una serie de opciones interactivas que nos permiten:
            </p>

            <ul className="first-ul">
              <li className="li-fun">
                ❓ Esta opción nos dirige al centro de ayuda y documentación en donde contamos con la información de la página.
              </li>
              <li className="li-fun">
                ⚙️ Esta opción de configuración nos redirige a un popup desde el cual podemos cambiar el tema entre dark/light
                y también redefinir el tamaño de la fuente utilzada en los chats.
              </li>
            </ul>
          </div>
        </section>

        <section className="section-tecnologia">
          <div className="div-tec">
            <h2 className="h2-tec">Tecnologías utilizadas</h2>
            <ul>
              <li className="li-tec">
                <strong>NodeJs:</strong> Tecnología principal utilizada para todo el proyecto, basada en javascript.
              </li>
              <li className="li-tec">
                <strong>React:</strong> Librería principal para construir la interfaz del chat. Permite crear
                componentes reutilizables y manejar el estado de la aplicación.
              </li>
              <li className="li-tec">
                <strong>React Router:</strong> Se utiliza para gestionar las rutas entre las distintas páginas, como
                el login y el chat principal.
              </li>
              <li className="li-tec">
                <strong>Context:</strong> Nos permite acceder de manera global a los diferentes estados individuales
                de cada componente sin necesidad de pasar esos datos manualmente uno por uno.
              </li>
              <li className="li-tec">
                <strong>Hooks (useState, useContext):</strong> Los usamos para manejar el estado y los efectos
                secundarios del chat (como el tema global o cambiar de usuario).
              </li>
              <li className="li-tec">
                <strong>CSS:</strong> Para gestionar los diferentes estilos de la interfaz de usuario.
              </li>
            </ul>
          </div>

          <div className="div-img">
            <img className="img1" src="tecnologia.jpg" alt="tecnologias utilizadas" />
          </div>
        </section>

        <section className="section-mejoras">
          <div>
            <img className="img1" src="mejoras.jpg" alt="mejoras del proyecto" />
          </div>
          <div>
            <ul className="ul-mej">
              <li>Posibilidad de poder cambiar el idioma de todo el proyecto.</li>
              <li>Contar con una base de datos para almacenar información.</li>
              <li>Poder acceder a todos los íconos y darle su funcionalidad.</li>
              <li>Realizar un cierre automático del chat luego de un tiempo de inactividad del.
              </li>
              <li>Incluir la posibilidad de eliminar contactos desde el chat.</li>
            </ul>
          </div>
          <div>
            <img className="logos" src="logos.png" alt="logos de tecnologias" />
          </div>
        </section>
      </main>

    </div>
  )
}

export default Help
