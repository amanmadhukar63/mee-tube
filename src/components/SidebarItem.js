import React from 'react';

const SidebarItem = (props) => {
  return (
    <div className='flex p-2 mx-2 my-1 items-center rounded-md hover:bg-slate-100'>
        <img className='h-5 mx-2' src={props.link} alt='item-logo' />
        <p className='mx-2'>{props.name}</p>
    </div>
  )
}

export default SidebarItem;
