import React from 'react'
import SidebarItem from './SidebarItem';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='border-r-2 w-52'>
      <div>
        <ul>
          <li><SidebarItem name="Home" link="https://cdn-icons-png.flaticon.com/512/25/25694.png"/></li>
          <li><SidebarItem name="Shorts" link='/yt-shorts.png'/></li>
          <li><SidebarItem name="Subsciptions" link="/yt-subsciption.png"/></li>
          <hr className='my-3' />
          <li><SidebarItem name="Library" link="/yt-library.png"/></li>
          <li><SidebarItem name="Liked Video" link="/yt-like.png"/></li>
          <li><SidebarItem name="Watch Later" link="/yt-watchLater.png"/></li>
        </ul>
        <hr className='my-2' />
      </div>
      <div className='my-2'>
        <h1 className='mx-4 text-lg'>Explore</h1>
        <ul>
          <li><SidebarItem name="Trending" link="/yt-trending.png"/></li>
          <li><SidebarItem name="Music" link="/yt-music.png"/></li>
          <li><SidebarItem name="Movie" link="/yt-movie.png"/></li>
          <li><SidebarItem name="Sports" link="/yt-sports.png"/></li>
          <li><SidebarItem name="Learning" link="/yt-learning.png"/></li>
        </ul>
      </div>
      <p>@2023 Aman Madhukar</p>
    </div>
  )
}

export default Sidebar
