import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toogleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';

const Header = () => {
    
    const dispatch= useDispatch();
    const [searchText,setSearchText]=useState("");
    const [searchSuggetion,setSearchSuggetion]=useState([]);
    const [displaySearchSuggetion,setDisplaySearchSuggetion]=useState(false);
    
    useEffect(()=>{

      const getSuggetion=async ()=>{
        const data=await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+searchText);
        const json=await data.json();
        // console.log(json)
        setSearchSuggetion(json[1]);
      }

      getSuggetion();
    },[searchText]);

    

    const toogleMenuHandler=()=>{
        dispatch(toogleMenu());
    }


    
    return (
    <div className='flex justify-between shadow-lg items-center sticky top-0 bg-white'>
      <div className='flex justify-around items-center w-48'>
        <img onClick={()=>toogleMenuHandler()} className='h-8 cursor-pointer' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png' alt='img' />
        <Link to="/"><img className='h-16' src='/yt-logo.png' alt='youtube-logo' /></Link>
      </div>
      <div className='w-1/2'>
        <div className='flex h-12 items-center w-full'>
          <input className='w-full px-6 py-4 h-2 border-2 rounded-l-full' type='text' placeholder='Search' onBlur={()=>{setTimeout(()=>setDisplaySearchSuggetion(false),100)}} onFocus={()=>setDisplaySearchSuggetion(true)} value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
          <Link to={"/results?search_query="+searchText}><img className='h-9 bg-gray-100 px-3 border-2 rounded-r-full border-l-0' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKOXd98dcelwv7LoT31ERUK0Eak-oviT3ng&usqp=CAU' alt='search-logo' /></Link>
        </div>
        {displaySearchSuggetion && 
        <div className='shadow-lg absolute w-1/2 bg-slate-50 rounded-lg'>
          {searchSuggetion.map(s=><Link key={s} to={"/results?search_query="+s}><p className='py-2 px-6 hover:bg-slate-200 rounded-lg' onClick={()=>setSearchText(s)}>{s}</p></Link>)}
        </div>}
      </div>
      <div className='mx-4'>
        <img className='h-8' src='https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png' alt='user' />
      </div>
    </div>
  )
}

export default Header;
