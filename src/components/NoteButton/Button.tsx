import React from 'react'
import './Button.scss'

interface ButtonProps extends React.ComponentPropsWithRef<'button'>{
    
}

export const Button:React.FC<ButtonProps> = ({children, onClick, ...props}) => {
  return (
    <button className='button' onClick={onClick} {...props}>
        {children}
    </button>
  )
}