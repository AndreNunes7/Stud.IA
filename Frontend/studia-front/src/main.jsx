import React from 'react'
import ReactDom from 'react-dom/client'
import Home from './containers/home_cadastrar';
import MyGlobalStyles from './styles/StyleGlobal';
ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyGlobalStyles/>
   <Home/>
  </React.StrictMode>,
)
