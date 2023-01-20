import React from 'react';
import { Link } from 'wouter';

export function TopicList({ list }){

    return(<>
        {list.map( ({ name_encoded, name }) => {

            return(
                <Link className='topic' key={name_encoded} to={`/search/${name_encoded}`}>
                    { name }
                </Link>
            );

        })}
    </>)

}