import React, { useState } from 'react';
import { Link } from 'wouter';

export function TopicList({ list, position }){

    return (
    <div className="topic_list" style={position}>
          {list.map(({ name_encoded, name }) => {
            return (
              <div key={name_encoded} className="topic bg_secondary">
                <Link
                
                key={name_encoded}
                to={`/search/${name_encoded}`}
                >
                  {name}
                </Link>
              </div>
            );
          })}
    </div>
    );

}