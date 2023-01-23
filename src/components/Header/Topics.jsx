import React, { useState } from 'react';
import { useTopics } from '../../hooks/useTopics';
import { TopicList } from './TopicList';

export function Topics({  }){

    const { loading, topics } = useTopics();

    return (
      <nav className="topics_container">
        <TopicList list={topics}/>
      </nav>
    );

}