import { API_KEY, TOPICS_API } from "../../settings";
import { getData } from "../helpers/genericFetch";
import { useState, useEffect } from "react";

export function useTopics(){
    const url = `https://${TOPICS_API}?api_key=${API_KEY}`;

    const [topics, setTopics] = useState([]);
    const [loading, isLoading] = useState(false);

    useEffect(()=>{
        isLoading(true);
        getData(url)
            .then(({data}) => {
                setTopics(data);
                isLoading(false);
            });
        
    },[])

    return {loading, topics};

}