import React, {useState} from 'react';
import {RatingValueType} from '../Rating/Rating';

type StarPropsType = {
    checked: boolean
    callback: () => void
}

export type UncontrolledRating = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export const UncontrolledRating: React.FC<UncontrolledRating> = ({defaultValue, onChange}) => {

    const [value, setValue] = useState<RatingValueType>(defaultValue ? defaultValue : 0);

    const callback = (value: RatingValueType) => {
        setValue(value);
        onChange(value);
    }

    return (
        <div>
            <Star checked={value >= 1} callback={() => callback(1)}/>
            <Star checked={value >= 2} callback={() => callback(2)}/>
            <Star checked={value >= 3} callback={() => callback(3)}/>
            <Star checked={value >= 4} callback={() => callback(4)}/>
            <Star checked={value >= 5} callback={() => callback(5)}/>
        </div>
    )
}

const Star: React.FC<StarPropsType> = ({checked, callback}) => {
    return <span onClick={callback}>{checked ? <b>Star</b> : 'Star'}</span>;
}


