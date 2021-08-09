import React from 'react'
import style from './button.module.css'
export const Button = (props) => {
    return (
        <button className={style.btn} onClick={props.onClick}>
            {props.children}
        </button>
    )
}
