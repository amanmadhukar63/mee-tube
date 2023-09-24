import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { searchAPI } from '../utils/constant';
import SearchResultChannel from './SearchResultChannel';

const SearchResult = () => {
    const [params]=useSearchParams();
    const query=params.get('search_query');
    const [searchData,setSearchData]=useState([]);

    

    useEffect(()=>{

        const getSearchResult=async ()=>{
            const data= await fetch(searchAPI+query);
            const json= await data.json();
            setSearchData(json.items);
            console.log(json.items[0]);
        }

        getSearchResult();
    },[]);
    if(searchData.length===0) return null;
  return (
    <div>
      <SearchResultChannel data={searchData[0]}/>
    </div>
  )
}

export default SearchResult
