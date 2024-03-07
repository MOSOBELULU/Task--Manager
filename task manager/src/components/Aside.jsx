import React from 'react';
import Calender from './Calender';
import Tasks from './Tasks';

function Aside(props) {
    return (
        <div>
            <h1>Task Buddy</h1>
            <Tasks />
           <Calender />
        </div>
    );
}

export default Aside;