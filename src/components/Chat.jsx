import { useState } from "react"
import { useChat } from "../context/chatContext"
import { Link, useNavigate } from "react-router-dom"
import ReactSwitch from "react-switch"
import { useThemeContext } from "../context/ThemeContext"






function Chat() {


  const [msg, setMsg] = useState("")
  const [showPopup, setShowPopup] = useState(false)
  const [checked, setChecked] = useState(false)

  const [font, setFont] = useState("fontmin")

  const { users, selectedUser, setUsers } = useChat()

  const user = users.find(u => u.id === selectedUser)

  const navigate = useNavigate()

  if (!user) {
    return (
      <div className="user-not-found" >
        <p>No hay usuario seleccionado...</p>
      </div>
    )
  }



  const handleChange = (event) => {
    setMsg(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault()


    const newMessage = {
      id: crypto.randomUUID(),
      text: msg,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }

    const updatedUsers = users.map(u =>
      u.id === user.id
        ? { ...u, messages: [...u.messages, newMessage] }
        : u
    )

    setUsers(updatedUsers)
    setMsg("")


  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    navigate("/")
  }


  const handleShowPopup = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  const handleMedium = () => {
    setFont("fontmed")

  }
  const handleMin = () => {
    setFont("fontmin")

  }
  const handleMax = () => {
    setFont("fontmax")

  }


  const { contextTheme, setContextTheme } = useThemeContext()

  const handleSwitch = (nextChecked) => {

    setContextTheme((state) => (state === "" ? "dark1" : ""))
    setChecked(nextChecked)

  }


  return (
    <>
      {
        showPopup === true &&
        <section className="cont-popup" >

          <div className={`popup ${contextTheme}`}>
            <div className="div-img">
              <img className="img-setting" src="setting02.png" alt="" />
            </div>
            <div className="div-setting">
              <button onClick={handleClosePopup} className="close-popup">Cerrar</button>
              <h1 >Ajustes del chat</h1>
              <h2>Cambiar el tema</h2>
              <div>
                <ReactSwitch
                  checked={checked}
                  onChange={handleSwitch}
                  onColor="#86d3ff"
                  onHandleColor="#2693e6"
                  handleDiameter={30}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={20}
                  width={48}
                  className="react-switch"


                />
              </div>
              <h2>Tamaño de fuente</h2>
              <div >
                <button className="little-popup" onClick={handleMin}>Pequeño</button>
                <button className="medium-popup" onClick={handleMedium} >Mediano</button>
                <button className="big-popup" onClick={handleMax}>Grande</button>
              </div>
            </div>
          </div>

        </section>
      }
      <div className="chat" >
        <header className={`chat-header ${contextTheme}`}>
          <div>
            <div className="chat-user">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
                alt={user.name}
                className="chat-avatar"
              />
              <strong>{user.name}</strong>
              {user.lastSeen !== "" && <span className="last-seen">Last seen: {user.lastSeen}</span>}
            </div>
          </div>
          <div className="chat-actions" >
            <button title="Camera">📷</button>
            <button title="Gallery">🖼️</button>
            <button title="Settings" onClick={handleShowPopup}>⚙️</button>
            <Link to="/help" title="Help">❓</Link>
            <button className={`button-chat ${contextTheme}`} onClick={handleLogout}>Cerrar sesión</button>
          </div>
        </header>

        <section className="chat-messages" >
          {user.messages.map((message) => (
            <div className={`message ${contextTheme} `} key={message.id}>
              <p className={`${font}`} >{message.text}</p>
              <span className="time">{message.time}</span>
            </div>
          ))}
        </section>

        <footer className={`chat-footer ${contextTheme}`}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter text here..."
              onChange={handleChange}
              value={msg}
              className={`input-footer ${contextTheme}`}
            />
            <button>➤</button>
          </form>
        </footer>
      </div>
    </>
  )

}

export { Chat }