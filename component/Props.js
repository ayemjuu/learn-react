//read only
//parent can send data to child

import styles from './Props.module.css'
import PropTypes from 'prop-types'

function Student (props) {

    return (

        <div className={styles.container}>

            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "yesy": "Naurr"}</p>


        </div>
    )

}
//pangcheck ng props, debugging
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

//setting default props
Student.defaultProps = {
    name:"Guest",
    age: 0,
    isStudent: false
}
export default Student;