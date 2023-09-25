import React from 'react'

const SearchResultChannel = (props) => {

    const {channelTitle,channelId,description,title,thumbnails} = props.data.snippet;
    var css="";
    console.log(props.data.id.kind)
    if(props.data.id.kind==="youtube#channel") css="rounded-full";

  return (
    <div className='ml-56 p-4 w-5/6 flex items-center border-b'>
        <img className={css} src={thumbnails.medium.url} alt='thumbnail' />
        <div className='p-2 w-full pl-8'>
          <h1 className='font-bold text-xl'>{title}</h1>
          <p>{description}</p>
          <div className='flex items-center p-2'>
            <img className='border rounded-full w-8 mr-4' src={thumbnails.default.url} alt='thumbnail' />
            <p>{channelTitle}</p>
          </div>
          {channelId}
        </div>
    </div>
  )
}

export default SearchResultChannel
