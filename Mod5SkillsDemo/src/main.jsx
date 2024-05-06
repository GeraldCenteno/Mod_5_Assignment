import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Institution from './Institution.jsx'

let institutions = {
  institutions: [
      {
          name: "Olympic College",
          dates: "1998-2000",
          details: "ATA, Programming"
      },
      {
          name: "Olympic College",
          dates: "2000-2001",
          details: "ATA, LAN Administration and Support"
      },
      {
          name: "ITT Technical Institute",
          dates: "2003-2006",
          details: "BS, Electronics and Computer Engineering Technology"
      },
      {
          name: "University of California, Berkeley Extension",
          dates: "2018-2020",
          details: "Certificate, Fundamentals of Semiconductor Technology"
      },
      {
          name: "Olympic College",
          dates: "2021-present",
          details: "AAS-T, Software Development"
      }
  ]
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {
    institutions.institutions.map((i)=>{return <Institution key={i.name} name={i.name} dates={i.dates} details={i.details}></Institution>})
    }
    <App />
  </React.StrictMode>,
);
