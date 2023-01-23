import { useState, useEffect, useContext } from 'react';
import { getData } from '../helpers/genericFetch';
import { API_KEY, TRENDING_API } from '../../settings';

const url = `https://${TRENDING_API}&api_key=${API_KEY}`;

export function useTrendingGifs(){

    const  [ gifs, setGifs ]  = useState([]);
    const [ loading, isLoading ] = useState(false);

    useEffect(()=>{

        isLoading(true);

        getData(url)
            .then(({data}) => {
            
                setGifs(data);
            isLoading(false);
            
        });

    },[]);

    return {loading, gifs};

}