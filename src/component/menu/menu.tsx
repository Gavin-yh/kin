import React, { useState } from 'react'
import classNames from 'classnames'
import './menu.css'
import { MenuItemProps } from './menuItem'

type ModeType = 'horizon' | 'vertical' // 联合类型  字符串字面量： string litera types

type OnSelectType = (index: number, children?: React.ReactNode) => void

export interface MenuProps {
    activeIndex?: number;
    className?: string;
    style?: React.CSSProperties;
    mode?: ModeType;
    onSelect?: OnSelectType;
}

interface MenuContextToItem {
    index: number;
    onSelect?: OnSelectType;
}

export const MenuContext = React.createContext<MenuContextToItem>({ index: 0 })

const Menu: React.FC<MenuProps> = (props) => {
    const {
        activeIndex,
        className,
        style,
        mode,
        children,
        onSelect,
    } = props

    const [currentIndx, setCurrentIndex] = useState(activeIndex)

    const classList = classNames('menu', className, {
        'vertical': mode === 'vertical'
    })

    //子组件触发点击事件时，需要做两件事： 触发绑定在父级的用户事件，修改相应的状态currentIndex
    const handlerClick = (index: number, children?: React.ReactNode) => {
        setCurrentIndex(index)
        if (onSelect) {
            onSelect(index, children)
        }
    }

    const middleContext: MenuContextToItem = {
        index: currentIndx ? currentIndx : 0,
        onSelect: handlerClick,
    }

    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childEle = child as React.FunctionComponentElement<MenuItemProps>
            const { displayName } = childEle.type
            if(displayName === 'MenuItem') {
                return React.cloneElement(childEle, {index})
            }else{
                console.warn('Menu children must be MenuItem')
            }
        })
    }

    return (
        <ul className={classList} style={style}>
            <MenuContext.Provider value={middleContext}>
                { renderChildren() }
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    activeIndex: 0,
    mode: 'horizon',
}

export default Menu






