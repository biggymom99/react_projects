import { useNavigate } from "react-router-dom"
import {Link} from 'react-router-dom'
import './Layout.css'
function Layout() {
    const navigate = useNavigate()
    return(
        <div>
            <header className="header">
                <div className="ul">
                    <ul className="gnb">
                        <li>
                            <a onClick={()=>(navigate('/user/${id}?name=John'))}>홈</a>                          
                        </li>
                        <li>
                            <Link to='/contents'>컨텐츠</Link>
                            
                        </li>
                        <li style={{marginLeft:'auto'}}>
                            <Link to='/login'>로그인</Link>
                        </li>
                    </ul>                  
               </div>
            </header>
            <Outlet/>
        </div>
    )
}

export default Layout