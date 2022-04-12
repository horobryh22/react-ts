import React, {useState} from 'react';

type valueType = 0 | 1 | 2 | 3 | 4 | 5;

type StarPropsType = {
    checked: boolean
}


export const UncontrolledRating: React.FC = () => {

    const [value, setValue] = useState<valueType>(0);

    const onClickButtonHandler = (value: valueType) => {
        return () => setValue(value);
    }

    return (
        <div>
            <Star checked={value >= 1}/>
            <button onClick={onClickButtonHandler(1)}>1</button>
            <Star checked={value >= 2}/>
            <button onClick={onClickButtonHandler(2)}>2</button>
            <Star checked={value >= 3}/>
            <button onClick={onClickButtonHandler(3)}>3</button>
            <Star checked={value >= 4}/>
            <button onClick={onClickButtonHandler(4)}>4</button>
            <Star checked={value >= 5}/>
            <button onClick={onClickButtonHandler(5)}>5</button>
        </div>
    )
}

const Star: React.FC<StarPropsType> = ({checked}) => {
    return (checked) ? <span><b>Star</b> </span> : <span>Star </span>;
}


