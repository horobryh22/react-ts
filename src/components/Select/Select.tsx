import React, {useState, FocusEvent, KeyboardEvent, useEffect} from 'react';
import classes from './Select.module.css';

type SelectPropsType = {
    value: string | null
    changeTitle: (value: string) => void
    options: Array<{ title: string, value: string }>
}

export const Select: React.FC<SelectPropsType> = ({value, options, changeTitle}) => {

    const [collapsed, setCollapsed] = useState(false);
    const [hoveredElement, setHoveredElement] = useState(value);

    // useEffect(() => {
    //     setHoveredElement(value);
    // }, [value]);

    const onClickHandlerCollapsed = () => {
        setCollapsed(!collapsed);
    }

    const onBlurHandler = (e: FocusEvent<HTMLDivElement>) => {
        if (collapsed) onClickHandlerCollapsed();
    }

    const enterOrEscPressHandler = () => {
        if (hoveredElement) changeTitle(hoveredElement);
        onClickHandlerCollapsed();
    }

    const mappedOptions = options.map((el) => {
        const onClickHandler = () => {
            changeTitle(el.value);
            onClickHandlerCollapsed();
        }

        const onMouseEnterHandler = () => {
            setHoveredElement(el.value);
        }

        const elemClass = (hoveredElement === el.value) ? `${classes.elem} ${classes.active}` : `${classes.elem}`;

        return <div className={elemClass} onMouseEnter={onMouseEnterHandler} onClick={onClickHandler}
                    key={el.value}>{el.title}</div>
    })

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        switch (e.key) {
            case 'ArrowDown':
                for (let i = 0; i < options.length - 1; i++) {
                    if (options[i].value === hoveredElement) {
                        changeTitle(options[i + 1].value);
                        setHoveredElement(options[i + 1].value);
                        break;
                    }
                }
                break;

            case 'ArrowUp':
                for (let i = 0; i < options.length; i++) {
                    if (options[i].value === hoveredElement) {
                        if (options[i - 1]) {
                            changeTitle(options[i - 1].value);
                            setHoveredElement(options[i - 1].value);
                        }
                        break;
                    }
                }
                break;

            case 'Enter':
                enterOrEscPressHandler();
                break;

            case 'Escape':
                enterOrEscPressHandler();
                break;
        }
    }

    const title = value ? options.find(el => el.value === value)?.title : options[0].title;

    return (
        <div className={classes.wrapper} onBlur={onBlurHandler} tabIndex={0} onKeyUp={onKeyUpHandler}>
            <div className={classes.title} onClick={onClickHandlerCollapsed}>
                {title}
            </div>
            <div>
                {collapsed && <div className={classes.list}>{mappedOptions}</div>}
            </div>
        </div>
    );
};
