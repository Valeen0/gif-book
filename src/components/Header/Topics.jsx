import React, { useState } from 'react';
import { useTopics } from '../../hooks/useTopics';
import { TopicList } from './TopicList';

export function Topics({  }){

    const { loading, topics } = useTopics();

    // Hay que optimizar esta lógica.
    const [ translate, setTranslate ] = useState("100");
    const [ position, setPosition ] = useState(0);

    const positionTopic = {
        transform: `translateX(${translate}%)`,
    }
    const moveRight = () => {
        
        switch (position) {
            case 0:
                setPosition(1);
                setTranslate("50");
                break;
            case 1:
                setPosition(2);
                setTranslate("0");
                break;
            case 2:
                setPosition(3);
                setTranslate("-50");
                break;
            case 3:
                setPosition(4);
                setTranslate("-100");
                break;
            case 4:
                setPosition(0);
                setTranslate("100");
                break;
        }

    }
    const moveLeft = () => {

        switch (position) {
            case 4:
                setPosition(3);
                setTranslate("-50");
                break;
            case 3:
                setPosition(2);
                setTranslate("0");
                break;
            case 2:
                setPosition(1);
                setTranslate("50");
                break;
            case 1:
                setPosition(0);
                setTranslate("100");
                break;
            case 0:
                setPosition(4);
                setTranslate("-100");
                break;
        }
    }

    return (
      <nav className="topics_container">
        <button onClick={moveLeft} className='prev'>{'<'}</button>
        <TopicList list={topics} position={positionTopic}/>
        <button onClick={moveRight} className='next'>{'>'}</button>
      </nav>
    );

}