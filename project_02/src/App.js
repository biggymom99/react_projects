import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Parent from './components/parent';
import Child from './components/child';

function Practice(){
  const [data,setData]=useState({
    name:'변자은', age:26, isMarried:false
  })
  return(
    <div>
      <Parent />
    </div>
  )
}
export default Practice;
