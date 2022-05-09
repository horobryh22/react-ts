import React, {useState, FocusEvent, KeyboardEvent} from 'react';
import classes from './Select.module.css';

type SelectPropsType = {
    value: string | null
    changeTitle: (value: string) => void
    options: Array<{ title: string, value: string }>
}

export const Select: React.FC<SelectPropsType> = ({value, options, changeTitle}) => {

    const [collapsed, setCollapsed] = useState(false);
    const [hover, setHover] = useState(true);

    const onClickHandlerCollapsed = () => {
        setHover(true);
        setCollapsed(!collapsed);
    }

    const onBlurHandler = (e: FocusEvent<HTMLDivElement>) => {
        if (collapsed) onClickHandlerCollapsed();
    }

    const onMouseMoveHandler = () => {
           setHover(false);
    }

    const mappedOptions = options.map((el) => {
        const onClickHandler = () => {
            changeTitle(el.value);
            onClickHandlerCollapsed();
        }

        const elemClass = (el.value === value && hover) ? `${classes.elem} ${classes.active}` : `${classes.elem}`;

        return <div className={elemClass} onClick={onClickHandler} key={el.value}>{el.title}</div>
    })

    const onKeyUpHandler =  (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < mappedOptions.length; i++) {

        }
    }


    const title = value ? options.find(el => el.value === value)?.title : options[0].title;

    return (
        <div className={classes.wrapper} onBlur={onBlurHandler} tabIndex={0} onKeyUp={onKeyUpHandler}>
            <div className={classes.title} onClick={onClickHandlerCollapsed}>
                {title}
            </div>
            <div onMouseMove={onMouseMoveHandler} >
                {collapsed && <div className={classes.list}>{mappedOptions}</div>}
            </div>
        </div>
    );
};
