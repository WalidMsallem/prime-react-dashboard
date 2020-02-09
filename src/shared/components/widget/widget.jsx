import React from 'react';
import './widget.scss'
const Widget = ({icon, count =0}) => {
    return (
        <div className="widget">
       <img  src = {icon}/>  
          <span> {count}</span>   
        </div>
    );
}

export default Widget;
