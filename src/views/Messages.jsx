import { Sidebar } from "../components/Sidebar.jsx"
import { Chat } from "../components/Chat"
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