import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="error">
            <h3>Ooops...</h3>
            <p>Something went wrong</p>
            <Link to="/question-groups">Go Back</Link>
        </div>
    )
}

export default ErrorPage;