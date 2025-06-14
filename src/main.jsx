import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Gitbody from './Gitbody.jsx'
import Githead from './Githead.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Githead/>
    <Gitbody/>
  </StrictMode>,
)
