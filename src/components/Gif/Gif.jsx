import React from 'react';
import { Link } from 'wouter';

export function Gif({ id, image = "", title = "" }){
    
    return(
        <Link href={`/gif/${id}`}>

            <a className='gif'>
                <img src={image} alt={title} />
            </a>

        </Link>

    );

}