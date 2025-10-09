import Chat from "../components/Chat"
import { Sidebar } from "../components/Sidebar.jsx"
import { ChatProvider } from "../context/chatContext"


const Messages = () => {
  return (

    <ChatProvider>
      <div className="app">
        <Sidebar />
        <Chat />
      </div>
    </ChatProvider>
  )
}

export { Messages }