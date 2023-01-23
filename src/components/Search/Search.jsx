import React from 'react';
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
                : <GifsList data={gifs}/>

            }

        </div>
    );

}