import React from 'react';

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

function Rating({value}: RatingPropsType) {

    return (
        <div>
            <Star checked={value >= 1}/>
            <Star checked={value >= 2}/>
            <Star checked={value >= 3}/>
            <Star checked={value >= 4}/>
            <Star checked={value >= 5}/>
        </div>
    )
}

type StarPropsType = {
    checked: boolean
}

function Star({checked}: StarPropsType) {
    console.log('Star is rendering');
    return (checked) ? <span><b>Star</b> </span> : <span>Star </span>;
}

export default Rating;

