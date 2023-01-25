import './header.css';
import React from 'react';
import { Form } from './Form';
import { Topics } from './Topics';
import { Link } from 'wouter';

export function Header({  }){

    return(
        <header>
            <div className='logo_container'>
                <Link className='primary_title' to="/">
                    GifBook
                </Link>
            </div>
            <Form />
            <Topics />
        </header>
    );

}