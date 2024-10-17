import { useLocation, useParams } from "react-router-dom"
function User(){
    const {userId} = useParams()
    const location = useLocation()

    const queryParams = new URLSearchParams(location.search)
    const name = queryParams.get('name')
    return(
        <div>
            <p>유저 ID : {userId}</p>
            <p>유저 name : {name}</p>
            
        </div>
    )
}

export default User