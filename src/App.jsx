import React from 'react'
import Form from './components/Form'
import Logo from './components/Logo'
import Tabs from './components/Tabs'

function App() {
  return (
    <div className='bg-dark min-h-screen text-white py-8'>
      {/* Logo */}
      <div className='flex justify-center'>
        <Logo />
      </div>

      {/* Form */}
      <Form />

      {/* Tabs */}
      <Tabs />
    </div>
  )
}

export default App