import Child from './child.jsx'
import {useState} from 'react'

const Parent = () =>{
    //const [name, setName]=useState('')
    //const [age, setAge]=useState(0)
    //const [isMarried,setIsMarried]=useState(false)

    const [form,setForm]=useState([
        
        {name:'', age:0, isMarried:false}
        
    ])

    const [list, setList]=useState([]);

    const handleAdd=() =>{
        setList([
            ...list, form

        ])
    }

    return(
        <div style={{border: '1px solid green', padding:'10px'}}>
            <p>이름</p>
            <input
                type="text"
                value={form.name}
                onChange={(e)=>setForm({
                    ...form,
                    name: e.target.value,
                })}
            />

            <p>나이</p>
            <input
                type="number"
                value={form.age}
                onChange={(e)=>setForm({
                    ...form,
                    age: e.target.value,
                })}
            />

            <p>결혼유무</p>
            <input
                type="checkbox"
                checked={form.isMarried}
                onChange={(e)=>setForm({
                    ...form,
                    isMarried: form.isMarried
                })}
            />
            <button onClick={handleAdd}>추가</button>
            
            {
                list.map((item)=>
                    <Child name={item.name} age={item.age} isMarried={item.isMarried} />
                )
            }
            
            
        </div>
    )
}
export default Parent