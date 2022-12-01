import React from 'react'
import logoImg from '../images/logo/logo.png'

function Logo() {
    return (
        <div className='flex items-center gap-3'>
            <div>
                <img className='w-8' src={logoImg} alt="Logo" />
            </div>
            <div className='text-2xl tracking-wide font-semibold text-primary'>
                My Projects
            </div>
        </div>
    )
}

export default Logo