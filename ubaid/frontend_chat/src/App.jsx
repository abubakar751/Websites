// src/App.jsx
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Jointchat from './components/jointchat';

function App() {
  const showToast = () => {
    toast('This is a toast notification!');
  };

  return (
     <div>
      <Jointchat/>    </div>
  );
}

export default App;
