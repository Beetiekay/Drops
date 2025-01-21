import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Designchat from './pages/messages/Designchat'
import Settings from './pages/Settings/Settings'
import Editdp from './pages/Editdp/Editdp'
import Feedback from './pages/Feedback/Feedback'
import Contact from './pages/Contact/Contact'
import Help from './pages/Help/Help'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import Reports from './pages/Reports/Reports'
import Chats from './pages/messages/Chats'
import Wallet from './pages/Wallet/Wallet'

export default function App() {
  return (
    <div className='flex'>
      <BrowserRouter>
       <Routes>
       <Route path="/" element={<Register/>}/>

        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/reports" element={<Reports/>}/>
        <Route path="/chats" element={<Chats/>}/>
        <Route path="/wallet" element={<Wallet/>}/>

        <Route path="/settings" element={<Settings/>}/>
        <Route path="/edit profile" element={<Editdp/>}/>
        <Route path="/designchat" element={<Designchat/>}/>

        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/help" element={<Help/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}
