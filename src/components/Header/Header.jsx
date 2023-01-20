import './header.css';
import React from 'react';
import { Form } from './Form';
import { Topics } from './Topics';

export function Header({  }){

    return(
        <header>
            <div className='logo_container'>
                <a href="/">
                    <h1>GifBook</h1>
                </a>
            </div>
            <Form />
            <Topics />
        </header>
    );

}