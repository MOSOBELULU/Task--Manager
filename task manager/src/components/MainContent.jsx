import React from 'react'
import MainNav from './MainNav';
import Tasks from './Tasks';

function MainContent(props) {
    return (
        <div>
            <MainNav />
            <div>
                <h2>Good Day User have a productive day!</h2>
            </div>
            <Tasks/>
        </div>
    );
}

export default MainContent;