import React from 'react'
// import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom';
import App from './App.jsx'
import './index.css'
import { StateProvider } from './components/Context.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
