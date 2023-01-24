import { useState, useEffect } from 'react';
import { API_KEY, SEARCH_BY_ID_API } from '../../settings';
import { getData } from '../helpers/genericFetch';

export function useGifById( id = "" ){

    const url = `https://${SEARCH_BY_ID_API}${id}?api_key=${API_KEY}`;

    const [ gif, setGif ] = useState({});
    const [ loading, isLoading ] = useState(true);

    useEffect(()=>{
        isLoading(true);

        getData(url)
            .then( ({data}) => {
                setGif(data);
                isLoading(false);
            })

    }, [id]);

    return {loading, gif};

}
