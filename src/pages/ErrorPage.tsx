import { Link } from "react-router-dom";
import Header from "@/components/header/Header";

function ErrorPage (){
    return(
        <>
            <Header title="Error" />
            <div>Page not found</div>
            <Link to="/">Take me home</Link>
        </>
    )

}

export default ErrorPage;