import React, {useState} from 'react';

type SelectPropsType = {
    value: any
    changeTitle: (value: any) => void
    options: Array<{ title: string, value: any }>
}

export const Select: React.FC<SelectPropsType> = ({value, options, changeTitle}) => {

    const [collapsed, setCollapsed] = useState(false);

    const onClickHandlerCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <div>
                <h3 onClick={onClickHandlerCollapsed}> {!value ? options[0].title : options.find(el => el.value === value)?.title}</h3>
                {collapsed
                    &&
                    <ul>
                        {options.map((el, index) => {
                            const onClickHandler = () => {
                                changeTitle(el.value);
                                onClickHandlerCollapsed();
                            }
                            return <li onClick={onClickHandler} key={index} value={el.value}>{el.title}</li>
                        })}
                    </ul>}
            </div>
        </div>
    );
};
