import React, {useState} from 'react';

type StarPropsType = {
    checked: boolean
    callback: () => void
}

export const UncontrolledRating: React.FC = () => {

    const [value, setValue] = useState<number>(0);

    return (
        <div>
            <Star checked={value >= 1} callback={() => setValue(1)}/>
            <Star checked={value >= 2} callback={() => setValue(2)}/>
            <Star checked={value >= 3} callback={() => setValue(3)}/>
            <Star checked={value >= 4} callback={() => setValue(4)}/>
            <Star checked={value >= 5} callback={() => setValue(5)}/>
        </div>
    )
}

const Star: React.FC<StarPropsType> = ({checked, callback}) => {
    return <span onClick={callback}>{checked ? <b>Star</b> : 'Star'}</span>;
}


