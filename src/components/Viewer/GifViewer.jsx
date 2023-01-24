import './gif_viewer.css';
import React from 'react';
import { useGifById } from '../../hooks/useGifById';
import { Loader } from '../Loader/Loader';
import { Like } from './Like';

export function GifViewer({ params }){
    const { id } = params;

    const { loading, gif } = useGifById(id);
    console.log(gif)

    if(loading)
        return(
            <section className='gif-viewer'>
                <Loader/>
            </section>
        )

    return(
        <section className='gif-viewer'>

            <div className='gif-view'>

                <div className='gif-title'>
                    <h2>{gif.title}</h2>
                </div>

                <div className='gif-content'>
                    <img src={gif.images.original.url} alt={gif.title} />
                </div>

                <div className='gif-controls'>
                    <Like gifId={gif.id} gifUrl={gif.images.original.url}/>
                </div>
            </div>

        </section>
    );

}