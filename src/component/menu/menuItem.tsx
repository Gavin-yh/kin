import React, { useContext } from 'react'
import classNames from 'classnames'
import Menu, { MenuContext } from './menu'

export interface MenuItemProps {
    index: number;
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

    const context = useContext(MenuContext)

    const classList = classNames('menu-item', className, {
        'disabled' : disabled,
        'is-actived' : context.index === index      
    })
    
    const handlerClick = () => {
        if(context.onSelect && !disabled) {
            context.onSelect(index, children)
            console.log(index, children)
        }
    }

    return (
        <li style={style} className={classList} onClick={handlerClick}>
            {children}
        </li>
    )
}

MenuItem.displayName = 'MenuItem'

export default MenuItem







