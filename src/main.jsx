import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterApp } from './router/RouterApp.jsx'
import './index.css'
import { ChatProvider } from './context/chatContext.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatProvider>
      <RouterApp />
    </ChatProvider>
  </StrictMode>,
)
