import {Filter} from '../filter/filter';
import style from './list.module.css';
import {details} from '../../constant'
import { useState } from 'react';

export const List = () => {
    const [userDetails , setUserDetails] = useState(details);

    const ageSortHandler = () => {
        const sortByAge = [...userDetails]
        sortByAge.sort((a,b) => {
            return a.age - b.age
            })    
      setUserDetails(sortByAge)        
    }

    const salarySortHandler = () => {
        const sortBySalary = [...userDetails]
        sortBySalary.sort((a,b) => {
              return a.salary - b.salary
              })    
        setUserDetails(sortBySalary)        
    }
    
    const nameSortHandler = () => {
        const sortByName = [...userDetails]
        sortByName.sort((a,b) => a.name.localeCompare(b.name))
        setUserDetails(sortByName) 
    }
   
    return (
        <>
            <Filter age={() => ageSortHandler()} salary={() => salarySortHandler()} name={() => nameSortHandler()}/>
            {/* <button onClick={() => ageSortHandler()}>Age</button> */}
                <div className={style.listHeader}>
                    <span>Name</span>
                    <span>Age</span>
                    <span>Salary</span>
                </div>
                    {userDetails.map((data,index) => {
                        return(
                            <div className={style.listDetails} key={index}>
                                <span>{data.name}</span>
                                <span>{data.age}</span>
                                <span>{data.salary}</span>
                            </div>)
                    })} 

        </>
    )
}
