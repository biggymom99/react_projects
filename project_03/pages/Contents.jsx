import { useParams , NavLink} from "react-router-dom"
import { useState } from 'react'
import { Outlet } from "react-router-dom"

export default function Contents(){
   const [contents, setContents]=
   useState([
      {
         id : 1,
         content : '컨텐츠 1입니다.'
      },
      {
         id : 2,
         content : '컨텐츠 2입니다.'
      },
      {
         id : 3,
         content : '컨텐츠 3입니다.'
      }
   ])
 return(
    <div>
      <h2>Users List</h2>
      <ul>
         {
            contents.map((item, idx)=> (
               <li key={idx}>
                  <NavLink to={`${item.id}?content=${item.content}`}/>

               </li>
            ))
         }
      </ul>
      <Outlet />
    </div>
 )
}

export default function UserDetail(){
   const { id } = useParams();
   return(
      <h3>User Detail for User {id}</h3>
   )
}

