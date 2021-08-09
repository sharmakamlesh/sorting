import React from 'react'
import style from './filter.module.css';
import { Button } from '../../ui/button/button';

export const Filter = (props) => {
    return (
        <section className={style.sortBy}>
            <h1>Sort By :</h1>
            <Button onClick={props.name}>Name</Button>
            <Button onClick={props.age}>Age</Button>
            <Button onClick={props.salary}>Salary</Button>
        </section>
    )
}

