import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import {AppContext} from '../context/AppContext'

const Navbar = () => {
  const navigate = useNavigate()
  const {setShowRecruiterLogin} = useContext(AppContext)
  return (
    <div className='shadow py-2'>
        <div className='container px-8 2xl:px-20 mx-auto flex justify-between items-center'>
            <img onClick={()=> navigate('/')} className='cursor-pointer' src={assets.logo1} width={180} alt="" />
            <div className='flex gap-4 max-sm:text-xs'>
                <button onClick={e =>setShowRecruiterLogin(true)} className='text-gray-600 cursor-pointer font-medium'>Recruiter Login</button>
                <button className='bg-gray-600 text-white px-6 sm:px-6 py-2 rounded cursor-pointer font-medium'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar

