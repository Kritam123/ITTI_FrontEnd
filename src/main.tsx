import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import { store } from './redux/store.ts'
import { Toaster } from './components/ui/toaster.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
 const clientId = import.meta.env.VITE_GOOGLE_CLIENTID
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
      </GoogleOAuthProvider>
    <Toaster/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
