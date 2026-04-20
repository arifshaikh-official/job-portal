// import React, { useContext } from 'react'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'
// import {AppContext} from '../context/AppContext'
// import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
// import { Link } from 'react-router-dom';

// const Navbar = () => {
  
//   const {openSignIn} = useClerk()
//   const {user} = useUser()
//   const navigate = useNavigate()
//   const {setShowRecruiterLogin} = useContext(AppContext)
//   return (
//     <div className='shadow py-2'>
//         <div className='container px-8 2xl:px-20 mx-auto flex justify-between items-center'>
//             <img onClick={()=> navigate('/')} className='cursor-pointer' src={assets.logo1} width={180} alt="" />
//             {
//               user
//               ? <div className='flex items-center gap-3'>
//                 <Link to={'/applications'}>Applied Jobs</Link>
//                 <p>|</p>
//                 <p>Hi, {user.firstName+" "+user.lastName}</p>
//                 <UserButton/>
//               </div>
//               :  <div className='flex gap-4 max-sm:text-xs'>
//                 <button onClick={e =>setShowRecruiterLogin(true)} className='text-gray-600 cursor-pointer font-medium'>Recruiter Login</button>
//                 <button onClick={e => openSignIn()} className='bg-gray-600 text-white px-6 sm:px-6 py-2 rounded cursor-pointer font-medium'>Login</button>
//             </div>
//             }
           
//         </div>
//     </div>
//   )
// }

// export default Navbar


import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const { openSignIn } = useClerk()
  const { user } = useUser()
  const navigate = useNavigate()
  const { setShowRecruiterLogin } = useContext(AppContext)

  // Mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='shadow py-2 relative bg-white'>
      <div className='container px-8 2xl:px-20 mx-auto flex justify-between items-center'>
        
        {/* LEFT: Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className='md:hidden p-2 text-gray-600 focus:outline-none order-1'
        >
          <div className='space-y-1.5'>
            <span className={`block w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-600 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        <img 
          onClick={() => navigate('/')} 
          className='cursor-pointer order-2 md:order-1' 
          src={assets.logo1} 
          width={160} 
          alt="Logo" 
        />

        {/* Navigation Links*/}
        <div className='hidden md:flex items-center gap-6 text-gray-600 font-medium order-2'>
          <Link to='/' className='hover:text-blue-600 transition'>Home</Link>
          <Link to='/about' className='hover:text-blue-600 transition'>About Us</Link>
          <Link to='/faq' className='hover:text-blue-600 transition'>FAQs</Link>
          <Link to='/blog' className='hover:text-blue-600 transition'>Career Blog</Link>
        </div>

        <div className='flex items-center gap-4 order-3'>
          {
            user
              ? <div className='flex items-center gap-3'>
              
                  <div className='hidden md:flex items-center gap-3'>
                    <Link to={'/applications'} className='text-gray-600 font-medium'>Applied Jobs</Link>
                    <p className='text-gray-400'>|</p>
                    <p className='text-sm text-gray-800 font-semibold'>Hi, {user.firstName+" "+user.lastName}</p>
                  </div>
                  <UserButton />
                </div>
              : <div className='flex gap-2 sm:gap-4'>
                  <button onClick={e => setShowRecruiterLogin(true)} className='text-gray-600 cursor-pointer font-medium max-sm:hidden'>Recruiter Login</button>
                  <button onClick={e => openSignIn()} className='bg-gray-700 text-white px-4 sm:px-6 py-2 rounded-md cursor-pointer font-medium hover:bg-gray-800 transition text-sm sm:text-base'>Login</button>
                </div>
          }
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div className='p-6 flex flex-col h-full'>
          <div className='flex justify-between items-center mb-8'>
            <img src={assets.logo1} width={130} alt="Logo" />
            <button onClick={() => setIsMenuOpen(false)} className='text-2xl text-gray-400'>✕</button>
          </div>
          
          <div className='flex flex-col gap-5 font-semibold text-gray-700'>
            <Link onClick={() => setIsMenuOpen(false)} to='/' className='p-2 hover:bg-blue-50 rounded-lg transition'>Home</Link>
            <Link onClick={() => setIsMenuOpen(false)} to='/about' className='p-2 hover:bg-blue-50 rounded-lg transition'>About Us</Link>
            <Link onClick={() => setIsMenuOpen(false)} to='/faq' className='p-2 hover:bg-blue-50 rounded-lg transition'>FAQs</Link>
            <Link onClick={() => setIsMenuOpen(false)} to='/blog' className='p-2 hover:bg-blue-50 rounded-lg transition'>Career Blog</Link>
            
            <hr className='my-2 border-gray-100' />

            {user ? (
              <div className='flex flex-col gap-4 p-2'>
                <Link onClick={() => setIsMenuOpen(false)} to={'/applications'} className='text-blue-600'>View Applied Jobs</Link>
                <div className='flex items-center gap-3 bg-slate-50 p-3 rounded-xl'>
                   <UserButton />
                   <div className='flex flex-col'>
                     <span className='text-xs text-gray-400'>Account</span>
                     <span className='text-sm font-bold text-gray-800'>{user.firstName}</span>
                   </div>
                </div>
              </div>
            ) : (
              <div className='flex flex-col gap-4 mt-4'>
                <button onClick={() => { setIsMenuOpen(false); setShowRecruiterLogin(true); }} className='p-2 text-left hover:text-blue-600 transition'>Recruiter Login</button>
                <button onClick={() => { setIsMenuOpen(false); openSignIn(); }} className='bg-blue-600 text-white px-4 py-3 rounded-xl w-full font-bold shadow-lg shadow-blue-100'>Login / Sign Up</button>
              </div>
            )}
          </div>

          <div className='mt-auto pb-6 text-center'>
            <p className='text-xs text-gray-400 font-medium'>© 2026 TalentGrid Search</p>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {isMenuOpen && (
        <div 
          onClick={() => setIsMenuOpen(false)} 
          className='fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden transition-opacity'
        ></div>
      )}
    </div>
  )
}

export default Navbar