import React, { useRef } from 'react';
import { useLocation } from 'wouter';

export function Form({}) {

  const inputRef = useRef(null);
  const [path, pushPath] = useLocation();

  function formReset(e){
    e.target.reset();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const keyword = inputRef.current.value;

    if (keyword.trim() === "") return;

    pushPath(`/search/${keyword}`);
    formReset(event);
  }

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        
        <div className="fieldset">
          <input
            type="text"
            name="keyword"
            ref={inputRef}
            placeholder="Buscar gif"
          />
        </div>

        <div className="fieldset">
          <button type="submit">
            <img src="src/assets/img/search.svg"/>
          </button>
        </div>

      </form>
    </div>
  );
}