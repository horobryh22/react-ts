import React from 'react';

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

function Rating({value}: RatingPropsType) {

    if (value === 1) {
        return <div>
            <Star checked={true}/>
            <Star checked={false}/>
            <Star checked={false}/>
            <Star checked={false}/>
            <Star checked={false}/>
        </div>
    }
    if (value === 2) {
        return <div>
            <Star checked={true}/>
            <Star checked={true}/>
            <Star checked={false}/>
            <Star checked={false}/>
            <Star checked={false}/>
        </div>
    }
    if (value === 3) {
        return <div>
            <Star checked={true}/>
            <Star checked={true}/>
            <Star checked={true}/>
            <Star checked={false}/>
            <Star checked={false}/>
        </div>
    }
    if (value === 4) {
        return <div>
            <Star checked={true}/>
            <Star checked={true}/>
            <Star checked={true}/>
            <Star checked={true}/>
            <Star checked={false}/>
        </div>
    }
    if (value === 5) {
        return <div>
            <Star checked={true}/>
            <Star checked={true}/>
            <Star checked={true}/>
            <Star checked={true}/>
            <Star checked={true}/>
        </div>
    }

    return (
        <div>
            <Star checked={false}/>
            <Star checked={false}/>
            <Star checked={false}/>
            <Star checked={false}/>
            <Star checked={false}/>
        </div>
    );
}

type StarPropsType = {
    checked: boolean
}

function Star({checked}: StarPropsType) {
    console.log('Star is rendering');
    return (checked) ? <span><b>Star</b> </span> : <span>Star </span>;
}

export default Rating;

