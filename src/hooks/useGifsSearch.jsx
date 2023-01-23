import { useState, useEffect } from 'react';
import { API_KEY, SEARCH_API } from '../../settings';
import { getData } from '../helpers/genericFetch';

export function useGifsSearch(keyword){
    const url = `https://${SEARCH_API}&q=${keyword}&api_key=${API_KEY}`

    const [ gifs, setGifs ] = useState([]);
    const [ loading, isLoading ] = useState(false);

    useEffect(()=>{

        isLoading(true)
        getData(url)
            .then(({data})=>{
                console.log(data)
                setGifs(data);
                isLoading(false)
        })

    }, [keyword]);

    return { loading, gifs };

}
