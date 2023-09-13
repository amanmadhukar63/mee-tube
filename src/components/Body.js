import React from 'react';
import Sidebar from './Sidebar';
import DataContainer from './DataContainer';

const Body = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <DataContainer />
    </div>
  )
}

export default Body;
