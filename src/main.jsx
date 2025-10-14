import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterApp } from './router/RouterApp.jsx'
import './index.css'
import { ChatProvider } from './context/chatContext.jsx';
import { ThemeContextProvider } from './context/ThemeContext.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <ChatProvider>
        <RouterApp />
      </ChatProvider>
    </ThemeContextProvider>

  </StrictMode>,
)
