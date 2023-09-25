import React, { useEffect, useState } from 'react'
import { useSearchParams , Link } from 'react-router-dom';
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
            console.log(json.items);
        }

        getSearchResult();
    },[query]);
    if(searchData.length===0) return null;
  return (
    <div>
      {searchData.map(s=>
        (s.id.kind==="youtube#video") ? <Link to={"/watch?v="+s.id.videoId}><SearchResultChannel data={s}/></Link>
        : <SearchResultChannel data={s}/>
      )}
    </div>
  )
}

export default SearchResult
