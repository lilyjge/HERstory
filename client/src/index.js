import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from "@propelauth/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider authUrl={process.env.REACT_APP_AUTH_URL}>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);

