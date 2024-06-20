import React, {useState} from 'react';
import styles from './Counter.module.css';


function Counter () {


    let [count, setCount] = useState(0)
  


    const toggleIncrement = () => {
        setCount(count + 1)

    }
    const toggleDecrement = () => {
        setCount(count - 1)

    }
    const toggleReset = () => {
        setCount(count = 0)

    }

    return (

        <div className={styles.counterContainer}>

            <label className={styles.counterDisplay}>{count}</label>
            <br></br>
            <button className={styles.button} onClick={toggleIncrement}>Add</button>
            <button className={styles.button} onClick={toggleReset}>Reset</button>
            <button className={styles.button} onClick={toggleDecrement}>Minus</button>



        </div>
    )

}


export default Counter;