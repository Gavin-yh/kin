import React from 'react'
import classNames from 'classnames'

export interface MenuItemProps {
    index?: number;
    className?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
}


const MenuItem: React.FC<MenuItemProps> = (props) => {
    const {
        index,
        className,
        disabled,
        children,
        style,
    } = props

    const classList = classNames('menu-item', className, {
        'disabled' : disabled       
    })


    return (
        <li style={style} className={classList}>
            {children}
        </li>
    )
}


export default MenuItem







