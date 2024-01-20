import { useRouteError } from "react-router-dom";

const Error=()=>{
const err= useRouteError();
    return(
        <div>
<h1>Oopps !!</h1>
<h2>Page not found</h2>
<h3>{err.status}:{err.statusText}</h3> 

        </div>



    )


}
export default Error;