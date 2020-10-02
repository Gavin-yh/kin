import React from 'react'
import './index.css'
import classNames from 'classnames'
import { warn } from '../../common'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Danger = 'danger',
  Link = 'link',
  Default = 'default',
}  

interface ButtonProps {
  className?: string,
  disabled?: boolean,
  size?: ButtonSize,
  btnType?: ButtonType,
  children?: React.ReactNode,
  href?: string,
}


const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
  } = props

  const classList = classNames('btn', {
    [`btn-${btnType}`] : btnType,
    [`btn-${size}`] : size,
    disabled: (btnType === ButtonType.Link) && disabled,  //link的disabled
    [`${className}`] : className,
  })

  if(btnType === ButtonType.Link) {
    if(!href) {
      warn('the link button is require argument of href')
    }
    return (
      <a 
        href={href ? href : ''}
        className={classList}
      >
        {children}
      </a>
    )
  }else{
    return (
      <button
        className={classList}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }
} 

export default Button
