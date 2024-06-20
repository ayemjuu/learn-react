import styles from './Conditional.module.css'

function UserGreeting (props) {

    const wellComeMessage = <h2 className={styles.wellCome}>Wellcome {props.userName}</h2>;
    const logInMessage =  <h2 className={styles.logIn}>Login to continue</h2>

    return(props.isLoggedIn ? wellComeMessage : logInMessage)
}

export default UserGreeting;