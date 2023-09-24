import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import API from '../utils/constant';
import { Link } from 'react-router-dom';

const DataContainer = () => {
  const [videoList, setVideoList]=useState([]);
  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos = async ()=>{
    const list= await fetch(API);
    const json= await list.json();
    console.log(json);
    setVideoList(json.items);
  }
  if(videoList.length===0) return <p>Data</p>
  return (
    <div className='flex w-5/6 flex-wrap ml-56'>
      {videoList.map(video=><Link to={"/watch?v="+video.id}><VideoCard key={video.id} data={video} /></Link>)}
    </div>
  )
}

export default DataContainer
