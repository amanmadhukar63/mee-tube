import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { videoAPI, relatedVideoAPI } from '../utils/constant';

const WatchPage = () => {
    const [params]=useSearchParams();
    const id=params.get('v');
    const dispatch=useDispatch();
    const [videoDetail,setVideoDetail]=useState({});
    const [relatedVideo,setRelatedVideo]=useState([]);

    useEffect(()=>{
        dispatch(closeMenu());
        getVideoData();
        getReltedVideo();
    },[]);

    const getVideoData=async()=>{
      const data=await fetch(videoAPI+id);
      const json=await data.json();
      setVideoDetail(json.items[0]);
    }

    const getReltedVideo=async()=>{
      const data=await fetch(relatedVideoAPI+id);
      const json=await data.json();
      console.log(json);
    }

    function convert (labelValue) {

      return Math.abs(Number(labelValue)) >= 1.0e+9
  
      ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
      : Math.abs(Number(labelValue)) >= 1.0e+6
  
      ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(1) + "M"
      : Math.abs(Number(labelValue)) >= 1.0e+3
  
      ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(0) + "K"
  
      : Math.abs(Number(labelValue));
  
  }

    if(Object.keys(videoDetail).length === 0) return null;

    const {title,channelTitle}=videoDetail.snippet;
    const {viewCount,likeCount}=videoDetail.statistics;


  return (
    <div className='mx-5 p-2' >
      <iframe
      width="950" 
      height="500" 
      src={"https://www.youtube.com/embed/"+id+"?autoplay=1"} 
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      <p className='font-semibold text-[22px] py-3'>{title}</p>
      <div className='flex justify-between'>
        <p className='font-semibold text-xl'>{channelTitle}</p>
        <div className='flex justify-around w-1/2'>
          <p className='font-normal text-lg'>{convert(viewCount)} views</p>
          <p className='font-normal text-lg'>{convert(likeCount)} likes</p>
        </div>
      </div>
    </div>
  )
}

export default WatchPage
