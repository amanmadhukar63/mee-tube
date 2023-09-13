import React from 'react'
import { useDispatch } from 'react-redux';
import { toogleMenu } from '../utils/appSlice';

const Header = () => {
    
    const dispatch= useDispatch();

    const toogleMenuHandler=()=>{
        dispatch(toogleMenu());
    }


    
    return (
    <div className='flex justify-between shadow-lg items-center '>
      <div className='flex justify-around items-center w-48'>
        <img onClick={()=>toogleMenuHandler()} className='h-8 cursor-pointer' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png' alt='img' />
        <img className='h-16' src='https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png' alt='youtube-logo' />
      </div>
      <div className='flex h-12 items-center w-1/2'>
        <input className='w-3/4 p-4 h-2 border-2 rounded-l-full' type='text' placeholder='Search' />
        <img className='h-9 bg-gray-100 px-3 border-2 rounded-r-full border-l-0' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKOXd98dcelwv7LoT31ERUK0Eak-oviT3ng&usqp=CAU' alt='search-logo' />
      </div>
      <div className='mx-4'>
        <img className='h-8' src='https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png' alt='user' />
      </div>
    </div>
  )
}

export default Header;
