import React from 'react';
import { addLocalStorage } from '../../helpers/doLocalStorage';

export function Like({ gifId, gifUrl }){

    function handleLike(){
        addLocalStorage( gifId, gifUrl );
    }

    return (
      <button onClick={handleLike} className="like">
        <img loading="lazy" src="/src/assets/img/heart.svg" alt="Like" />
      </button>
    );

}