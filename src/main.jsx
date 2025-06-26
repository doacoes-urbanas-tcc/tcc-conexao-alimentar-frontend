import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/*
- service: caso precise fazer uma chamada API ou um serviço global.
- containers: páginas
- components: componentes gerais (ex.: button que é exibido em todas as páginas)
*/