function Child(props){
    return(
        <div style={{border:'1px solid blue'}}>
            <p>이름</p>
            <div>{props.name}</div>
            <p>나이</p>
            <div>{props.age}</div>
            {props.isMarried ? (<div>기혼</div>) : (<div>미혼</div>)}
        </div>
    )
}

export default Child