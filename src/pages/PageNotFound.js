import { Link } from 'react-router-dom'
import Styles from "../styles/PageNotFound.module.scss";
const NotFound = () => {
    return (
        <div className={`${Styles.NotFound}`}>
            <div className={`${Styles.notfound}`}>
                <div className={`${Styles.notfoundFour}`}>
                    <h1>404</h1>
                </div>
                <h2>Oops! This Page Could Not Be Found</h2>
                <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
                <Link to="/">Back To Home Page</Link>
            </div>
        </div>
    )
}
export default NotFound