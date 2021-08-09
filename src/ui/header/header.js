import React from 'react'
import style from './header.module.css'

export const Header = () => {
    return (
        <header className={style.header}>
            <nav>
                <div className={style.logo}>
                    <h1>LOGO</h1>
                </div>
                <div>
                    <h1>Welcome</h1>
                </div>
            </nav>
            
        </header>
    )
}
