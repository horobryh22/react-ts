import React from 'react';
import './App.css';


function App() {
    return (
        <div>
            This is APP component
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    return (
        <>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
        </>
    )
}

function Accordion() {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

function Star() {

    return <div>Star</div>

}

export default App;
