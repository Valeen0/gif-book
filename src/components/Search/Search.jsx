import React from 'react';
import "./search.css"
import { useGifsSearch } from '../../hooks/useGifsSearch';
import { GifsList } from '../Gif/GifsList';
import { Loader } from '../Loader/Loader';

export function Search({ params }) {

    const { keyword } = params; 
    const {loading, gifs} = useGifsSearch(keyword);

    return(
        <div className='search-container'>
            
            {
                loading
                ? <Loader/>
                : ( 
                    <>
                        <h3>{ decodeURI(keyword) }</h3>
                        <hr />
                        <GifsList data={gifs}/>
                    </>
                )

            }

        </div>
    );

}