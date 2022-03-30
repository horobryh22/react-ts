import React from 'react';
import exp from 'constants';

function Rating(props: any) {

    if (props.value === 1) {
        return <div>
            <Star checked={true}/>
            <Star checked={false}/>
            <Star checked={false}/>
            <Star checked={false}/>
            <Star checked={false}/>
        </div>
    }
    if (props.value === 2) {
        return <div>
            <Star checked={true}/>
            <Star checked={true}/>
            <Star checked={false}/>
            <Star checked={false}/>
            <Star checked={false}/>
        </div>
    }
    if (props.value === 3) {
        return <div>
            <Star checked={true}/>
            <Star checked={true}/>
            <Star checked={true}/>
            <Star checked={false}/>
            <Star checked={false}/>
        </div>
    }
    if (props.value === 4) {
        return <div>
            <Star checked={true}/>
            <Star checked={true}/>
            <Star checked={true}/>
            <Star checked={true}/>
            <Star checked={false}/>
        </div>
    }
    if (props.value === 5) {
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

// type PropsType = {
//     checked: boolean
//     value: number
// }

function Star(props: any) {
    console.log('Star is rendering');
    return (props.checked) ? <span><b>Star</b> </span> : <span>Star </span>;
}

export default Rating;

