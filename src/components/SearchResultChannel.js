import React from 'react'

const SearchResultChannel = (props) => {

    const {channelTitle,channelId,description,title,thumbnails} = props.data.snippet;

  return (
    <div>
        <img src={thumbnails.medium.url} alt='thumbnail' />
      {title}
      <br/>
      {channelTitle}
      <br/>
      {description}
      <br/>
      {channelId}
    </div>
  )
}

export default SearchResultChannel
