import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const [params]=useSearchParams();
    const id=params.get('v');
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
  return (
    <div>
      <iframe
      className='mx-5 p-2' 
      width="900" 
      height="500" 
      src={"https://www.youtube.com/embed/"+id} 
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default WatchPage
