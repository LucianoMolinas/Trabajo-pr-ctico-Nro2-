
import "../styles/components/ChatHeader.css"


const ChatHeader = () => {
  return (
    <header>
      <div>
        <img src="./avatar .jpeg" alt="" />
        <h3>Aiden Chavez</h3>
        <p>Last seen : 2 hours ago </p>
      </div>
      <div>
        <button title="Sacar foto">📷</button>
        <button title="Subir imagen">⛺</button>
        <button title="Configuracion">⚙</button>
        <button title="Ayuda">❓</button>
      </div>
    </header>

  )
}

export default ChatHeader 