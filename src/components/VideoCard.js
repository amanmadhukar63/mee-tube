import React from 'react'

const VideoCard = ({data}) => {
  return (
    <div className='p-2 m-2 w-64 '>
      <img className='rounded-md' src={data.snippet.thumbnails.medium.url} alt="thumbnail" />
      <h2 className='font-semibold py-2'>{data.snippet.title}</h2>
      <div className='text-slate-400'>
        <p>{data.snippet.channelTitle}</p>
        <p>{data.statistics.viewCount} views</p>
      </div>
    </div>
  )
}

export default VideoCard
