import { Link } from "react-router-dom";

function ErrorPage (){
    return(
        <>
        <div id="page_title" className="title"></div>
        <h2>Error</h2>
        <div>Page not found</div>
        <Link to="/">Take me home</Link>
        </>
    )

}

export default ErrorPage;