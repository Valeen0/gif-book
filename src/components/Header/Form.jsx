import React, { useState } from 'react';
import { useLocation } from 'wouter';

export function Form({  }){

    const [ keyword, setKeyword ] = useState('');
    const [ path, pushPath ] = useLocation();

    function clearForm(){
        setKeyword("");
    }

    function handleChange(event){
        setKeyword(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        if(keyword.trim() === '') return;

        pushPath(`/search/${keyword}`);
        clearForm();
    }

    return (
      <div className="form_container">
        <form onSubmit={handleSubmit}>
          <div className="fieldset">
            <input
              type="text"
              name="keyword"
              placeholder='Buscar gif'
              onChange={handleChange}
              value={keyword}
            />
          </div>
          <div className="fieldset">
            <button type="submit">Buscar</button>
          </div>
        </form>
      </div>
    );

}