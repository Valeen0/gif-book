import './gif.css'
import React from 'react';
import { Gif } from './Gif';

export function GifsList({ data = [] } = {}){

    return(
        <div className='gifs-container'>

            {data.map( data =>{
                const {id, title, images} = data;

                return(
                    <Gif key={id} id={id} title={title} image={images.fixed_height.url} />
                ) 
                
            })}
        </div>
    );

}