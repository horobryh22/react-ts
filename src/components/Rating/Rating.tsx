import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType;
    setRatingValue: (value: RatingValueType) => void
}

function Rating({value, setRatingValue}: RatingPropsType) {

    return (
        <div>
            <Star checked={value >= 1} setRatingValue={setRatingValue} value={1}/>
            <Star checked={value >= 2} setRatingValue={setRatingValue} value={2}/>
            <Star checked={value >= 3} setRatingValue={setRatingValue} value={3}/>
            <Star checked={value >= 4} setRatingValue={setRatingValue} value={4}/>
            <Star checked={value >= 5} setRatingValue={setRatingValue} value={5}/>
        </div>
    )
}

type StarPropsType = {
    value: RatingValueType
    checked: boolean
    setRatingValue: (value: RatingValueType) => void
}

function Star({checked, setRatingValue, value}: StarPropsType) {
    return <span onClick={() => setRatingValue(value)}>{checked ? <b>Star </b> : 'Star ' }</span>;
}

export default Rating;

