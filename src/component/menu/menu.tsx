import React from 'react'
import classNames from 'classnames'
import './menu.css'

type ModeType = 'horizon' | 'vertical' // 联合类型  字符串字面量： string litera types

export interface MenuProps {
    activeIndex?: number;
    className?: string;
    style?: React.CSSProperties;
    mode?: ModeType;
    onSelect?: (index: number) => void;
}

const Menu: React.FC<MenuProps> = (props) => {
    const {
        activeIndex,
        className,
        style,
        mode,
        children,
    } = props
    
    const classList = classNames('menu', className, {
        'vertical': mode === 'vertical'
    })

    return (
        <ul className={classList} style={style}>
            {children}
        </ul>
    )
}

Menu.defaultProps = {
    activeIndex: 0,
    mode: 'horizon',
}

export default Menu






